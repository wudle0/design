<template>
  <a-flex
    gap="6"
    vertical
    class="progress-divide"
    :style="{ '--progress-height': size + 'px' }"
  >
    <div v-if="label" class="ant-progress-label">
      <span class="ant-progress-label-item">{{ label }}</span>
    </div>
    <a-flex gap="16" class="progress-divide-container">
      <div class="progress-divide-row">
        <div
          v-for="index in Array.from({ length: total }, (_, i) => i + 1)"
          :key="index"
          class="progress-divide-item"
          :class="{
            active: index <= current && !useUsageStatus,
            'count-over': countOver && index > current,
            // 사용률에 따른 색상 조건 (useUsageStatus가 true일 때만)
            'usage-low':
              useUsageStatus && index <= current && current / total <= 0.7,
            'usage-medium':
              useUsageStatus &&
              index <= current &&
              current / total > 0.7 &&
              current / total <= 0.9,
            'usage-high':
              useUsageStatus && index <= current && current / total > 0.9,
          }"
        />
      </div>
      <div v-if="showPercent" class="progress-divide-percent">
        {{ Math.round((current / total) * 100) }}%
      </div>

      <div v-if="showCountRight" class="progress-divide-percent">
        {{ current }}/{{ total }}
      </div>
    </a-flex>
    <div v-if="showCount && !showCountRight" class="ant-progress-label">
      <span class="ant-progress-label-item">{{ current }}/{{ total }}</span>
    </div>
  </a-flex>
</template>

<script lang="ts" setup>
interface Props {
  current: number;
  total: number;
  size?: number;
  showPercent?: boolean;
  countOver?: boolean;
  showCount?: boolean;
  showCountRight?: boolean;
  label?: string;
  useUsageStatus?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 12,
  showPercent: false,
  countOver: false,
  showCount: true,
  showCountRight: false,
  label: '',
  useUsageStatus: false,
});
</script>
