<template>
  <div class="title-group" :class="props.level ? `level-${props.level}` : ''">
    <!-- 좌측 타이틀, 백버튼, 툴팁, 상태, 디스크립션 영역 -->
    <a-flex class="group-items" vertical>
      <!-- 1행 : 타이틀, 백버튼, 툴팁, 태그 -->
      <a-flex class="row">
        <a-button
          class="auto btn-back"
          @click="router.go(-1)"
          v-if="props.backbutton"
        >
          <template #icon>
            <Icon size="xs" color="default">
              <template #name>arrow_back</template>
            </Icon>
          </template>
        </a-button>
        <!-- sider 닫기 버튼 추가 -->
        <a-button
          class="auto btn-toggle-sider close"
          @click="handleToggle"
          v-if="props.siderButton"
        >
          <template #icon>
            <Icon size="md" color="default">
              <template #name>left_panel_close</template>
            </Icon>
          </template>
        </a-button>
        <!-- 1차 버전 : 툴팁 없음 -->
        <!-- <a-typography-title :level="1" class="item-title">
          <slot name="title"> {{ props.title }} </slot>
        </a-typography-title> -->
        <!-- 2차 버전 : 생으로 인라인으로 삽입 -->
        <!-- <a-tooltip :title="showTooltip ? props.title : null" autoAdjustOverflow>
          <a-typography-title
            :level="1"
            ref="ellipsisItemRef"
            class="item-title"
          >
            <slot name="title">{{ props.title }}</slot>
          </a-typography-title>
        </a-tooltip> -->
        <!-- 3차 버전 : 슬롯으로 넘기기 -->
        <!-- <BasicEllipsisText>
          <template #item>
            <a-typography-title :level="1" class="item-title">
              <slot name="title">{{ props.title }}</slot>
            </a-typography-title>
          </template>
        </BasicEllipsisText> -->
        <!-- 4차 버전 : 타이틀 별 레벨이 다를 수 있기 때문에 내부에서 처리 -->
        <a-typography-title :level="1" class="item-title">
          <slot name="title">
            <BasicEllipsisText :text="props.title" />
          </slot>
        </a-typography-title>
        <a-typography-text class="item-num" v-if="props.number">
          {{ props.number }}
        </a-typography-text>
        <template v-if="props.tooltip">
          <a-tooltip :title="props.tooltip.title" autoAdjustOverflow>
            <a-button class="auto">
              <Icon size="md" color="default">
                <template #name>{{ props.tooltip.icon || 'help' }}</template>
              </Icon>
            </a-button>
          </a-tooltip>
        </template>
        <div class="tag-wrap" v-if="props.tags?.length">
          <a-tag
            v-for="(tag, index) in props.tags"
            :key="index"
            :class="[
              tag.color,
              tag.size
                ? tag.size
                : props.level === 'panel' ||
                    props.level === 'content' ||
                    props.level === 'card'
                  ? 'medium'
                  : 'small',
            ]"
          >
            <p class="tag-wrap-text">{{ tag.text.toUpperCase() }}</p>
          </a-tag>
        </div>
      </a-flex>
      <!-- 2행 : 디스크립션 -->
      <a-flex class="row" v-if="props.description && !props.iconDescription">
        <!-- 디스크립션은 기본이 띄어쓰기 노출을 위해 pre-line 적용 -->
        <a-typography-text class="item-desc">
          <template v-if="props.level === 'label' || props.level === 'form'">
            {{ props.description }}
          </template>
          <template v-else>
            <BasicEllipsisText :text="props.description" />
          </template>
        </a-typography-text>
      </a-flex>
      <a-flex class="row" v-if="props.iconDescription">
        <a-typography-text
          class="item-desc with-icon"
          :class="props.iconDescription.icon"
        >
          <Icon size="xs" fill>
            <template #name>
              {{
                props.iconDescription.icon === 'success'
                  ? 'check_circle'
                  : props.iconDescription.icon
              }}
            </template>
          </Icon>
          {{ props.iconDescription.text }}
        </a-typography-text>
      </a-flex>
    </a-flex>
    <a-flex
      class="group-items items-end"
      v-if="slots.extra && slots.extra().length > 0"
    >
      <slot name="extra">
        <!-- 우측 영역 (예측 불가로 슬롯으로) -->
      </slot>
    </a-flex>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { Icon } from '@/components/icons';
import { BasicTitle, BasicEllipsisText } from '@/components/layouts';
import { useSlots } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const slots = useSlots();
const emit = defineEmits(['toggle-sider']);

const toggleSider = () => {
  emit('toggle-sider');
};

const ellipsisItemRef = ref<HTMLElement | null>(null);
const showTooltip = ref(false);

let observer: ResizeObserver | null = null;

const checkOverflow = () => {
  const el = ellipsisItemRef.value;
  if (el) {
    showTooltip.value = el.scrollWidth > el.clientWidth;
  }
};

onMounted(() => {
  nextTick(() => {
    checkOverflow();
    if (ellipsisItemRef.value) {
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

const props = defineProps<{
  level?: string | number;
  title: 'title-group : 타이틀';
  number?: string | number;
  description?: 'description';
  iconDescription?: {
    icon: string;
    text: string;
  };
  backbutton?: false;
  siderButton?: false;
  onToggle?: () => void;
  tooltip?: {
    title: string;
    icon?: string; // 아이콘 이름, 기본값 'help'
  };
  tags?: Array<{
    text: string;
    color?: string; // 예: 'green', 'red'
    size?: string; // 예: 'large', 'small'
  }>;
}>();

const handleToggle = () => {
  // console.log('BasicTitle handleToggle');
  if (props.onToggle) {
    props.onToggle();
  }
};
</script>
