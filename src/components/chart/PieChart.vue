<template>
  <a-card :bordered="true">
    <template #title>
      <slot name="title"></slot>
    </template>

    <!-- 차트 -->
    <a-flex class="chart-wrap" :vertical="props.orient === 'vertical'">
      <Echart
        :chart-data="chartOption"
        :style="{ height: props.height }"
        :unit="props.unit"
      />

      <!-- 범례가 ChartList인 경우 -->
      <ChartLegend
        v-if="
          props.legendSize !== 'scroll' && !props.tableSize && props.legendSize
        "
        :lists="[legendList]"
        :size="props.legendSize"
        :height="props.height"
        @clickLegendItem="handleLegendClick"
      />

      <!-- 범례가 ChartTable인 경우 -->
      <Table
        v-if="props.tableSize"
        :show-filter="props.filter ? true : false"
        :columns="tableColumns"
        :data="tableData"
        :customRow="
          (record: any) => ({
            class: !visibility[parseInt(record.key) - 1] ? 'inactive' : '',
          })
        "
        noPadding
        add
        class="chart-table"
        :class="props.tableSize ? props.tableSize : ''"
      >
        <template #bodyCell="{ column, record }">
          <div @click="handleTableRowClick(record)">
            <template v-if="column.dataIndex === 'label'">
              <div class="chart-table-cell">
                <span class="chart-table-text">
                  <div
                    class="chart-color-box"
                    :class="[
                      'color' + record.key,
                      !visibility[parseInt(record.key) - 1] ? 'inactive' : '',
                    ]"
                  />
                  {{ record.label }}
                </span>
              </div>
            </template>
            <template v-else>
              {{ record[column.dataIndex] }}
            </template>
          </div>
        </template>
      </Table>
    </a-flex>
  </a-card>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { Echart, ChartLegend } from './index';
import { Table } from '@/components/table';

interface PieData {
  name: string[];
  data: number[];
}

interface Props {
  pieData: PieData;
  unit?: string;
  height?: string;
  legendSize?: 'small' | 'medium' | 'large' | 'scroll';
  tableSize?: 'medium' | 'large'; // table 크기
  orient?: 'horizontal' | 'vertical';
  pieCenter?: string[];
  pieRadius?: string;
  filter?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  unit: '',
  height: '208px',
  legendSize: undefined,
  tableSize: undefined,
  orient: 'horizontal',
  pieCenter: () => ['50%', '50%'],
  pieRadius: '60%',
  filter: false,
});

const emit = defineEmits<{
  (e: 'legendToggle', index: number, visible: boolean): void;
}>();

const seriesData = computed(() => {
  const pieData = props.pieData.data.map((value, index) => ({
    value: value,
    name: props.pieData.name[index] || `Segment ${index + 1}`,
  }));

  return [
    {
      name: 'Pie Chart Series',
      data: pieData,
    },
  ];
});

const visibility = reactive<boolean[]>(
  computed(() => seriesData.value[0].data.map(() => true)).value
);

const chartOption = computed(() => {
  const visibleSeries = seriesData.value.map((series, i) => ({
    ...series,
    type: 'pie',
    radius: props.pieRadius,
    center: props.pieCenter,
    itemStyle: {
      borderColor: 'var(--border-inverse)',
      borderWidth: 1,
    },
    avoidLabelOverlap: false,
    label: {
      show: false,
      position: 'center',
    },
    emphasis: {
      label: {
        show: false,
      },
    },
    labelLine: {
      show: false,
    },
    data: series.data.map((item: any, itemIndex: number) => ({
      ...item,
      value: visibility[itemIndex] ? item.value : 0,
    })),
  }));

  let gridConfig: any = {
    top: 16,
    left: 16,
    right: 16,
    bottom: 16,
    containLabel: true,
  };
  let legendConfig: any = {
    show: (props.legendSize as string) === 'scroll',
    orient: 'horizontal',
    type: 'scroll',
    itemWidth: 10,
    itemHeight: 10,
    pageIconSize: 6,
    itemStyle: {
      borderWidth: 0,
    },
  };

  if (props.legendSize === 'scroll') {
    if (props.orient === 'horizontal') {
      legendConfig.orient = 'vertical';
      legendConfig.right = 10;
      legendConfig.top = 'center';
      delete legendConfig.bottom;
      delete legendConfig.left;

      gridConfig.right = 95;
    } else {
      legendConfig.orient = 'horizontal';
      legendConfig.bottom = 4;
      legendConfig.left = 'center';
      delete legendConfig.right;
      delete legendConfig.top;
    }
  }

  return {
    tooltip: {
      trigger: 'item',
      confine: true, // 툴팁이 차트 영역을 벗어나지 않도록 제한
      formatter: (params: any) => {
        // params는 단일 객체이므로 배열로 감싸서 필터링
        const validParam = params.value !== 0 ? params : null;

        if (!validParam) return '';

        let result = `<div class="tooltip-title">${validParam.name}</div>`;
        result += `<div class="tooltip-item">
        ${validParam.marker}
        <div class="tooltip-item-content">
          <span class="series-name">${validParam.name} :</span>
          <span class="value">${validParam.value} (${validParam.percent}%)</span>
        </div>
        </div>`;
        return result;
      },
    },
    legend: legendConfig,
    grid: gridConfig,
    series: visibleSeries,
    animation: true,
    animationDuration: 1000,
    animationEasing: 'quarticOut',
    animationDurationUpdate: 200,
    animationEasingUpdate: 'cubicOut',
    universalTransition: true,
  };
});

const legendList = computed(() => {
  return seriesData.value[0].data.map((item: any, i: number) => ({
    key: String(i + 1),
    label: item.name,
    value: String(Math.round(item.value ?? 0)),
    visible: visibility[i],
  }));
});
const handleLegendClick = (index: number) => {
  visibility[index] = !visibility[index];
  emit('legendToggle', index, visibility[index]);
};

const tableColumns = computed(() => {
  return [
    {
      title: 'Label',
      dataIndex: 'label',
      filterSearch: true,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      filterSearch: true,
    },
  ];
});

const tableData = computed(() => {
  return seriesData.value[0].data.map((item: any, itemIndex: number) => {
    return {
      key: String(itemIndex + 1),
      label: item.name,
      value: String(item.value),
    };
  });
});
const handleTableRowClick = (record: any) => {
  const seriesIndex = parseInt(record.key) - 1;
  handleLegendClick(seriesIndex);
};
</script>
