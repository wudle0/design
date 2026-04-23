<template>
  <div class="controls">
    <div class="control-group sort-filter">
      <div
        class="scroll-area"
        :class="{
          'dim-left-on': isDimLeftOn,
          'dim-right-on': isDimRightOn,
        }"
      >
        <div class="scroll-container">
          <a-checkbox-group v-model:value="formState.monitoringStatus">
            <!-- 3.0.5 반영 : focus-area 추가 -->
            <div
              class="focus-area"
              v-for="option in props.options"
              tabindex="0"
            >
              <a-checkbox
                :key="option.label"
                :value="option.label"
                :class="[
                  'monitoring-status',
                  option.value,
                  { inactive: option.inactive },
                ]"
              >
                {{ option.label.toUpperCase() }} ({{ option.number }})
              </a-checkbox>
            </div>
          </a-checkbox-group>
        </div>
      </div>
    </div>
    <div class="control-group legend">
      <template v-if="props.btnVirtual">
        <StatusHeader
          solution="contrabass"
          statusType="instancePower"
          title="Unit"
        />
      </template>
      <template v-else>
        <a-tooltip autoAdjustOverflow overlayClassName="control-filter-tooltip">
          <template #title>
            <div class="ant-tooltip-reverse-list">
              <div
                class="ant-tooltip-reverse-list-item"
                v-for="item in props.helpList"
                :key="item.title"
              >
                <dt>
                  <MonitoringUnit
                    :type="
                      item.title === 'Empty Unit'
                        ? 'empty'
                        : item.title === '하이퍼바이저'
                          ? 'hypervisor'
                          : item.title === '베어 메탈'
                            ? 'bareMetal'
                            : item.title === '스토리지'
                              ? 'storage'
                              : item.title === '스위치'
                                ? 'switch'
                                : ''
                    "
                  />
                </dt>
                <dd>{{ item.title }}</dd>
              </div>
            </div>
          </template>
          <div class="d-flex gap-4 align-items-center">
            <span>Unit</span>
            <Icon size="md" color="default">
              <template #name>help</template>
            </Icon>
          </div>
        </a-tooltip>
      </template>
      <a-button v-if="props.btnRefresh" class="auto">
        <Icon size="md" color="default" fill>
          <template #name>refresh</template>
        </Icon>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, onMounted, onUnmounted } from 'vue';
import { Icon, MonitoringUnit } from '@/components/icons';
import StatusHeader from '@/components/table/StatusHeader.vue';

const props = defineProps<{
  btnRefresh?: boolean;
  btnVirtual?: boolean;
  options?: Array<{
    label: string;
    value: string;
    number: string;
    off?: boolean;
    inactive?: boolean;
  }>;
  helpList?: Array<{
    key: number;
    title: string;
  }>;
}>();

const formState = reactive({
  monitoringStatus: [] as string[],
});

// 필터 스크롤
let filterScrollContainer: HTMLDivElement | null = null;
const isDimLeftOn = ref(false);
const isDimRightOn = ref(false);

const handleFilterScroll = () => {
  if (!filterScrollContainer) return;
  setFilter();
};
const handleFilterResize = () => {
  if (!filterScrollContainer) return;
  setFilter();
};

const setFilter = () => {
  if (!filterScrollContainer) return;

  const contEl = filterScrollContainer;
  const scrollLeft = contEl.scrollLeft;
  const scrollWidth = contEl.scrollWidth;
  const clientWidth = contEl.clientWidth;
  const maxScrollLeft = scrollWidth - clientWidth;

  isDimLeftOn.value = scrollLeft > 1;
  isDimRightOn.value = scrollLeft < maxScrollLeft;
};

onMounted(() => {
  // props.options에서 off !== true인 항목들의 label을 monitoringStatus에 추가
  formState.monitoringStatus =
    props.options
      ?.filter((option) => option && option.off !== true)
      .map((option) => option.label) || [];

  const scrollEl = document.querySelector(
    '.sort-filter .scroll-container'
  ) as HTMLDivElement;
  if (scrollEl) {
    filterScrollContainer = scrollEl;

    scrollEl.addEventListener('scroll', handleFilterScroll);
    handleFilterScroll();
  }

  window.addEventListener('resize', handleFilterResize);
});

onUnmounted(() => {
  if (filterScrollContainer) {
    filterScrollContainer.removeEventListener('scroll', handleFilterScroll);
  }
  window.removeEventListener('resize', handleFilterResize);
});
</script>
