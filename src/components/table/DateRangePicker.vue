<template>
  <a-flex gap="8" align="center">
    <a-select
      v-model:value="selectedPeriod"
      :placeholder="placeholder"
      style="min-width: 120px"
    >
      <a-select-option value="오늘">오늘</a-select-option>
      <a-select-option value="1일">1일</a-select-option>
      <a-select-option value="3일">3일</a-select-option>
      <a-select-option value="7일">7일</a-select-option>
      <a-select-option value="기간 설정">기간 설정</a-select-option>
    </a-select>

    <a-range-picker
      v-model:value="dateRange"
      :format="format"
      :disabled="selectedPeriod !== '기간 설정'"
    >
      <template #suffixIcon>
        <Icon size="md" color="default">
          <template #name>calendar_month</template>
        </Icon>
      </template>
    </a-range-picker>
  </a-flex>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import { Icon } from '@/components/icons';

interface Props {
  placeholder?: string;
  format?: string;
  modelValue?: {
    period: string | null;
    dateRange: [Dayjs, Dayjs] | null;
  };
}

interface Emits {
  (
    e: 'update:modelValue',
    value: { period: string | null; dateRange: [Dayjs, Dayjs] | null }
  ): void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '기간 설정',
  format: 'YYYY-MM-DD',
  modelValue: () => ({ period: null, dateRange: null }),
});

const emit = defineEmits<Emits>();

const selectedPeriod = ref<string | null>(props.modelValue.period);
const dateRange = ref<[Dayjs, Dayjs] | null>(props.modelValue.dateRange);

watch(selectedPeriod, (period) => {
  if (!period || period === '기간 설정') {
    emitValue();
    return;
  }

  const today = dayjs();
  let startDate: Dayjs;
  let endDate: Dayjs = today;

  switch (period) {
    case '오늘':
      startDate = today;
      endDate = today;
      break;
    case '1일':
      startDate = today.subtract(1, 'day');
      break;
    case '3일':
      startDate = today.subtract(3, 'day');
      break;
    case '7일':
      startDate = today.subtract(7, 'day');
      break;
    default:
      return;
  }

  dateRange.value = [startDate, endDate];
  emitValue();
});

watch(dateRange, () => {
  emitValue();
});

// 값 emit
const emitValue = () => {
  emit('update:modelValue', {
    period: selectedPeriod.value,
    dateRange: dateRange.value,
  });
};
</script>
