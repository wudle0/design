<template>
  <!-- tooltip -->
  <template v-if="props.viewType === 'tooltip'">
    <!-- 단일 데이터 노출 -->
    <template v-if="!Array.isArray(props.value) || props.value.length === 1">
      <!-- <div class="text-mask"> -->
      <span ref="ellipsisItemRef" class="ellipsis-text" :class="lineClampClass">
        {{
          Array.isArray(props.value) ? props.value[0]?.text : props.value?.text
        }}
      </span>
      <!-- </div> -->

      <!-- 말줄임 생겼을 때만 전체보기(툴팁) 버튼 노출 -->
      <a-popover v-if="showTooltip" trigger="click" overlayClassName="no-arrow">
        <template #title v-if="props.title">
          <BasicTitle level="popover" :title="props.title" />
        </template>
        <template #content>
          {{
            Array.isArray(props.value)
              ? props.value[0]?.text
              : props.value?.text
          }}
        </template>
        <a-button class="secondary small btn-moreview">
          전체보기
          <Icon size="xs" color="default" fill>
            <template #name>keyboard_arrow_right</template>
          </Icon>
        </a-button>
      </a-popover>
    </template>

    <!-- 다수 데이터 노출 -->
    <template v-else>
      <!-- <div class="text-mask"> -->
      <div class="ellipsis-text">
        {{ props.value[0]?.text }}
      </div>
      <div class="ellipsis-text">
        {{ props.value[1]?.text }}
      </div>
      <div class="ellipsis-text">
        {{ props.value[2]?.text }}
      </div>
      <!-- </div> -->
      <template v-if="props.value.length > 3">
        <a-popover trigger="click" overlayClassName="no-arrow">
          <template #title>
            <BasicTitle
              level="popover"
              :title="props.title"
              :description="`${props.value.length}개`"
            />
          </template>
          <template #content>
            <ul class="default-list">
              <li v-for="(item, index) in props.value" :key="index">
                {{ item.text }}
              </li>
            </ul>
          </template>
          <a-button class="secondary small btn-moreview">
            전체보기
            <Icon size="xs" color="default" fill>
              <template #name>keyboard_arrow_right</template>
            </Icon>
          </a-button>
        </a-popover>
      </template>
    </template>
  </template>

  <!-- moreView -->
  <template v-else-if="props.viewType === 'more'">
    <!-- 단일 데이터 노출 -->
    <template v-if="!Array.isArray(props.value) || props.value.length === 1">
      <!-- <div class="text-mask"> -->
      <span
        ref="ellipsisItemRef"
        class="ellipsis-text"
        :class="[lineClampClass, { 'show-text': isExpanded }]"
      >
        {{
          Array.isArray(props.value) ? props.value[0]?.text : props.value?.text
        }}
      </span>
      <!-- </div> -->
      <!-- 말줄임 생겼을 때만 더보기 버튼 노출 -->
      <div v-if="showMoreView" class="d-block">
        <a-button class="secondary small btn-moreview" @click="handleMoreView">
          {{ isExpanded ? '접기' : '더보기' }}
        </a-button>
      </div>
    </template>

    <!-- 다수 데이터 노출 -->
    <template v-else>
      <!-- <div class="text-mask"> -->
      <div :class="!isExpanded ? 'ellipsis-text' : ''">
        {{ props.value[0]?.text }}
      </div>
      <div :class="!isExpanded ? 'ellipsis-text' : ''">
        {{ props.value[1]?.text }}
      </div>
      <div :class="!isExpanded ? 'ellipsis-text' : ''">
        {{ props.value[2]?.text }}
      </div>
      <!-- </div> -->
      <template v-if="props.value?.length > 3">
        <template v-if="isExpanded">
          <div
            v-for="(item, index) in props.value.slice(3)"
            :key="index"
            class="ellipsis-text"
          >
            {{ item.text }}
          </div>
        </template>
        <div class="d-block">
          <a-button
            class="secondary small btn-moreview"
            @click="handleMoreView"
          >
            {{ isExpanded ? '접기' : '더보기' }}
          </a-button>
        </div>
      </template>
    </template>
  </template>

  <!-- 기본 텍스트 -->
  <template v-else>
    {{ props.value?.text }}
  </template>
</template>

<script lang="ts" setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  nextTick,
  watch,
} from 'vue';
import { BasicTitle } from '@/components/layouts';
import { Icon } from '@/components/icons';

const props = defineProps<{
  value?: {
    type: string;
    text: string;
  }[];
  title?: string;
  lineClamp?: number;
  viewType?: 'tooltip' | 'more' | 'default';
}>();

// moreView가 true일 경우 기본값 3줄
const lineClampClass = computed(() => {
  const clamp =
    props.lineClamp ??
    (props.viewType === 'tooltip' || props.viewType === 'more' ? 3 : undefined);
  return clamp ? `line-clamp-${clamp}` : '';
});

const ellipsisItemRef = ref<HTMLElement | null>(null);
const showTooltip = ref(false); // 팝오버, 툴팁 공통 사용
const showMoreView = ref(false); // 더보기 버튼 표시 여부 (한번 true가 되면 유지)
const tooltipText = ref('');

let observer: ResizeObserver | null = null;

// 초기 말줄임 체크 (한 번만 실행)
const checkInitialOverflow = () => {
  const el = ellipsisItemRef.value;
  if (el) {
    const isOverflowing =
      el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
    if (props.viewType === 'more') {
      showMoreView.value = isOverflowing;
    } else if (props.viewType === 'tooltip') {
      showTooltip.value = isOverflowing;
    }
  }
};

const checkOverflow = () => {
  const el = ellipsisItemRef.value;
  if (el) {
    tooltipText.value = el.innerText.trim();
    const isOverflowing =
      el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
    if (props.viewType === 'tooltip') {
      showTooltip.value = isOverflowing;
    }
  }
};

onMounted(() => {
  nextTick(() => {
    // 초기 말줄임 체크 (한 번만)
    checkInitialOverflow();

    // tooltip이나 more 타입일 때 observer 설정
    if (
      (props.viewType === 'tooltip' || props.viewType === 'more') &&
      ellipsisItemRef.value
    ) {
      checkOverflow();
      observer = new ResizeObserver(checkOverflow);
      observer.observe(ellipsisItemRef.value);
    }
  });
});

onBeforeUnmount(() => {
  if (observer && ellipsisItemRef.value) {
    observer.unobserve(ellipsisItemRef.value);
  }
});

const isExpanded = ref(false);

const handleMoreView = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
<style scoped></style>
