<template>
  <!-- 별도 컴포넌트로 분리 // tooltipView 가 true 일 경우 팝오버 노출 -->
  <!-- <template v-if="props.tooltipView">
    <span ref="ellipsisItemRef" class="ellipsis-text" :class="lineClampClass">
      <template v-if="$slots.item">
        <slot name="item" />
      </template>
      <template v-else>
        {{ props.text }}
      </template>
    </span>
    <a-popover v-if="showTooltip" trigger="click">
      <template #title v-if="props.title">
        <BasicTitle level="popover" :title="props.title" />
      </template>
      <template #content>
        {{ props.text }}
      </template>
      <a-button class="secondary small">
        전체보기
        <Icon size="xs" color="default" fill>
          <template #name>keyboard_arrow_right</template>
        </Icon>
      </a-button>
    </a-popover>
  </template> -->

  <!-- 별도 컴포넌트로 분리 // moreView 가 true 일 경우 팝오버 노출 -->
  <!-- <template v-else-if="props.moreView">
    <span
      ref="ellipsisItemRef"
      class="ellipsis-text"
      :class="[lineClampClass, { 'show-text': isExpanded }]"
    >
      <template v-if="$slots.item">
        <slot name="item" />
      </template>
      <template v-else>
        {{ props.text }}
      </template>
    </span>
    <MoreViewButton v-if="showMoreView" v-model:isExpanded="isExpanded" />
  </template> -->

  <!-- 기본 -->
  <a-tooltip :title="showTooltip ? tooltipText : null" autoAdjustOverflow>
    <span ref="ellipsisItemRef" class="ellipsis-text" :class="lineClampClass">
      <template v-if="$slots.item">
        <slot name="item" />
      </template>
      <template v-else>
        {{ props.text }}
      </template>
    </span>
  </a-tooltip>
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
import { MoreViewButton } from '@/components/solution/common';

const props = defineProps<{
  title?: string;
  text?: string | number;
  lineClamp?: number;
  moreView?: boolean;
  tooltipView?: boolean;
}>();

// moreView가 true일 경우 기본값 3줄
const lineClampClass = computed(() => {
  const clamp =
    props.lineClamp ?? (props.moreView || props.tooltipView ? 3 : undefined);
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
    showMoreView.value = isOverflowing;
  }
};

const checkOverflow = () => {
  const el = ellipsisItemRef.value;
  if (el) {
    tooltipText.value = el.innerText.trim();
    const isOverflowing =
      el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
    showTooltip.value = isOverflowing;
  }
};

onMounted(() => {
  nextTick(() => {
    // 초기 말줄임 체크 (한 번만)
    checkInitialOverflow();

    // tooltipView일 때만 observer 설정
    if (props.tooltipView && ellipsisItemRef.value) {
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

// 상태 변화 감지를 위한 watch
watch(isExpanded, (newValue) => {
  console.log('BasicEllipsisText isExpanded changed:', newValue);
});
</script>
<style scoped></style>
