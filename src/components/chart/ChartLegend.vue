<template>
  <div class="chart-legend">
    <!-- 전체 해제 버튼 -->
    <div class="chart-legend-controls" v-if="props.toggleAllLegend">
      <a-button
        class="ghost small"
        @click="onToggleAll"
        :title="isAllActive ? '전체 해제' : '전체 선택'"
      >
        {{ isAllActive ? '전체 해제' : '전체 선택' }}
      </a-button>
    </div>

    <div :class="['chart-legend-container', props.size]">
      <ul
        v-for="(list, index) in props.lists"
        :key="index"
        class="chart-legend-list"
      >
        <li
          v-for="item in list"
          :key="item.key"
          :class="['chart-legend-item', { inactive: item.visible === false }]"
          @click="onClickLegendItem(item.key)"
        >
          <span class="chart-legend-item-key">
            <div class="chart-color-box" :class="'color' + item.key" />
            {{ item.label }}
          </span>
          <div class="chart-legend-item-value" v-if="!props.toggleAllLegend">
            {{ item.value }}{{ props.legendUnit || '' }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  lists: any[];
  size?: string;
  height?: string | number;
  toggleAllLegend?: boolean;
  legendUnit?: string; // 범례 단위
}

const props = withDefaults(defineProps<Props>(), {
  size: 'small',
  height: undefined,
  toggleAllLegend: false,
});

const emit = defineEmits(['clickLegendItem', 'toggleAllLegends']);

// 모든 legend 항목이 활성화되어 있는지 확인
const isAllActive = computed(() => {
  if (!props.lists || props.lists.length === 0) return false;

  // 모든 리스트의 모든 항목이 활성화되어 있는지 확인
  for (const list of props.lists) {
    if (!Array.isArray(list)) continue;

    for (const item of list) {
      if (item.visible === false) return false;
    }
  }

  return true;
});

function onClickLegendItem(key: string) {
  if (!props.lists) return;

  // 모든 리스트에서 해당 key를 가진 항목을 찾기
  for (let listIndex = 0; listIndex < props.lists.length; listIndex++) {
    const list = props.lists[listIndex];
    if (!Array.isArray(list)) continue;

    const itemIndex = list.findIndex((item) => item.key === key);
    if (itemIndex !== -1) {
      // key에서 실제 인덱스 추출 (key가 "1", "2", "3"... 형태이므로)
      const actualIndex = parseInt(key) - 1;
      emit('clickLegendItem', actualIndex);
      return;
    }
  }
}

function onToggleAll() {
  // 현재 상태가 모두 활성화되어 있으면 모두 비활성화, 아니면 모두 활성화
  const shouldActivate = !isAllActive.value;
  emit('toggleAllLegends', shouldActivate);
}
</script>
