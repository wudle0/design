<template>
  <div class="pagination-wrap" v-if="total">
    <p class="pagination-total" v-if="!hideTotal">
      전체 수 <strong>{{ total }}</strong>
    </p>
    <a-flex
      gap="16"
      align="center"
      justify="space-between"
      v-if="!hideNavigation || !hideSelect"
    >
      <div class="pagination-item" v-if="!hideNavigation">
        <div class="pagination-item-btns">
          <a-button class="ghost" :disabled="current === 1" @click="goToFirst">
            <Icon size="md" color="default" fill>
              <template #name>keyboard_double_arrow_left</template>
            </Icon>
          </a-button>
          <a-button class="ghost" :disabled="current === 1" @click="goToPrev">
            <Icon size="md" color="default" fill>
              <template #name>keyboard_arrow_left</template>
            </Icon>
          </a-button>
        </div>
        <a-input
          class="pagination-item-input"
          v-model:value="currentPage"
          min="1"
          :max="totalPages"
          type="number"
          @change="onPageInputChange"
          @pressEnter="onPageInputChange"
        />
        <span class="pagination-item-text">/ {{ totalPages }}</span>
        <div class="pagination-item-btns">
          <a-button
            class="ghost"
            :disabled="current === totalPages"
            @click="goToNext"
          >
            <Icon size="md" color="default" fill>
              <template #name>keyboard_arrow_right</template>
            </Icon>
          </a-button>
          <a-button
            class="ghost"
            :disabled="current === totalPages"
            @click="goToLast"
          >
            <Icon size="md" color="default" fill>
              <template #name>keyboard_double_arrow_right</template>
            </Icon>
          </a-button>
        </div>
      </div>
      <div class="page-size" v-if="!hideSize && !hideSelect">
        <a-select
          v-model:value="selectedSize"
          :options="options"
          label-in-value
          @change="handleSizeChange"
        />
      </div>
    </a-flex>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Icon } from '../icons';

interface Props {
  // 3가지는 페이지 상태를 외부에서 관리하는 경우 사용
  total: number;
  current: number;
  pageSize: number;
  // 4가지는 페이지 내부 컴포넌트 on/off 용으로 사용
  hideTotal?: boolean;
  hideNavigation?: boolean;
  hideSelect?: boolean;
  hideSize?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:current', 'update:pageSize']);

const currentPage = ref(props.current);

// 페이지 크기 옵션
const options = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 50, label: '50' },
];

const selectedSize = ref({
  value: props.pageSize,
  label: `리스트 수 ${props.pageSize}`,
});

// 총 페이지 수 계산
const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

// 페이지 이동 함수들
const goToFirst = () => {
  currentPage.value = 1;
  emit('update:current', 1);
};

const goToLast = () => {
  currentPage.value = totalPages.value;
  emit('update:current', totalPages.value);
};

const goToPrev = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit('update:current', currentPage.value);
  }
};

const goToNext = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit('update:current', currentPage.value);
  }
};

// 페이지 크기 변경 핸들러
const handleSizeChange = (option: { value: number }) => {
  selectedSize.value = {
    value: option.value,
    label: `리스트 수 ${option.value}`,
  };
  emit('update:pageSize', option.value);
};

// 수동으로 페이지 번호 입력 시
const onPageInputChange = () => {
  // 입력 중이거나 빈 값이면 검증하지 않음
  if (!currentPage.value) return;

  let page = parseInt(String(currentPage.value), 10);
  if (isNaN(page) || page < 1) {
    page = 1;
  } else if (page > totalPages.value) {
    page = totalPages.value;
  }
  currentPage.value = page;
  emit('update:current', page);
};

// props 변경 감지
watch(
  () => props.current,
  (newValue) => {
    currentPage.value = newValue;
  }
);
</script>
