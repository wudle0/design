<template>
  <a-card :bordered="props.bordered">
    <template #title>
      <slot name="title"></slot>
    </template>

    <!-- 차트 -->
    <a-flex class="chart-wrap" :vertical="props.orient === 'vertical'">
      <Echart
        :chart-data="chartOption"
        :style="{ height: props.height }"
        :unit="props.unit"
        :showCenterValues="props.showCenterValues"
        :centerFirstValue="props.centerFirstValue"
        :centerSecondaryValue="props.centerSecondaryValue"
        :centerFirstValueUnit="props.centerFirstValueUnit"
        :centerSecondaryValueUnit="props.centerSecondaryValueUnit"
        :graphicTopText="props.graphicTextContent"
        :chartListTop="props.chartListTop"
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

interface DoughnutData {
  name: string[];
  data: number[];
}

interface Props {
  doughnutData: DoughnutData; // 도넛 차트 데이터 (이름과 값 배열)
  unit?: string; // 단위
  showCenterValues?: boolean; // 차트 중앙에 Used/Total 값 표시 여부
  centerFirstValue?: string; // 중앙 첫 번째 값 (Used)
  centerFirstValueUnit?: string; // 중앙 첫 번째 값 단위
  centerSecondaryValue?: string; // 중앙 두 번째 값 (Total)
  centerSecondaryValueUnit?: string; // 중앙 두 번째 값 단위
  height?: string; // 차트 높이
  legendSize?: 'small' | 'medium' | 'large' | 'scroll'; // 범례 크기
  tableSize?: 'medium' | 'large'; // table 크기
  orient?: 'horizontal' | 'vertical'; // 범례 방향
  filter?: boolean; // table legend 필터 표시 여부
  pieCenter?: string[]; // 도넛 차트 중심점 위치 [x%, y%]
  pieRadius?: string[]; // 도넛 차트 반지름 [내부, 외부]
  showGraphic?: boolean; // 차트 중앙 타이틀 값 표시 여부
  graphicTextPosition?: string; // 타이틀 세로 위치 (top 기준 %)
  graphicTextContent?: string; // 타이틀 내용
  graphicTextSize?: 'sm' | 'md' | 'lg'; // 타이틀 폰트 크기 (sm: 16px, md: 28px, lg: 40px)
  startAngle?: number; // 도넛 차트 시작 각도
  endAngle?: number; // 도넛 차트 끝 각도
  chartListTop?: string; // 중앙 리스트 상단 여백
  fillGap?: boolean; // 빈공간 회색처리
  statusColors?: string[]; // 각 구간의 색상 배열
  bordered?: boolean; // 카드 보더 표시 여부
}

const props = withDefaults(defineProps<Props>(), {
  unit: '',
  showCenterValues: true,
  centerFirstValue: '8',
  centerFirstValueUnit: 'Core',
  centerSecondaryValue: '888',
  centerSecondaryValueUnit: 'Core',
  height: '208px',
  legendSize: undefined,
  tableSize: undefined,
  orient: 'horizontal',
  filter: false,
  pieCenter: () => ['50%', '50%'],
  pieRadius: () => ['67%', '90%'],
  showGraphic: true,
  graphicTextPosition: '35%',
  graphicTextContent: '100%',
  graphicTextSize: 'md',
  fillGap: false,
  bordered: true,
});

const emit = defineEmits<{
  (e: 'legendToggle', index: number, visible: boolean): void;
}>();

const seriesData = computed(() => {
  const pieData = props.doughnutData.data.map((value, index) => ({
    value: value,
    name: props.doughnutData.name[index] || `Segment ${index + 1}`,
  }));

  if (props.fillGap) {
    const totalValue = pieData.reduce((sum, item) => sum + item.value, 0);
    if (totalValue < 100) {
      const remainingValue = 100 - totalValue;
      pieData.push({
        value: remainingValue,
        name: 'empty',
      });
    }
  }

  return [
    {
      name: 'Doughnut Chart Series',
      data: pieData,
    },
  ];
});

// 폰트 크기 매핑
const fontSize = computed(() => {
  const sizeMap = {
    sm: '16',
    md: '28',
    lg: '40',
  };
  return sizeMap[props.graphicTextSize || 'md'];
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
      itemStyle: {
        borderWidth: 1,
        borderColor: 'var(--border-inverse)',
        ...(item.name === 'empty' && {
          color: 'var(--chart-background01)',
        }),
        ...(props.statusColors &&
          props.statusColors[itemIndex] && {
            color: props.statusColors[itemIndex],
          }),
      },
      emphasis: {
        itemStyle: {
          borderWidth: 1,
          borderColor: 'var(--border-inverse)',
          ...(item.name === 'empty' && {
            color: 'var(--chart-background01)',
          }),
          ...(props.statusColors &&
            props.statusColors[itemIndex] && {
              color: props.statusColors[itemIndex],
            }),
        },
      },
    })),
    ...(props.startAngle !== undefined && {
      startAngle: props.startAngle,
    }),
    ...(props.endAngle !== undefined && {
      endAngle: props.endAngle,
    }),
  }));

  let gridConfig: any = {
    top: 16,
    left: 16,
    right: 16,
    bottom:
      props.orient === 'vertical' && props.legendSize === 'scroll' ? 26 : 16,
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

  const graphicConfig = props.showGraphic
    ? [
        {
          type: 'text',
          left: 'center',
          top: props.graphicTextPosition,
          style: {
            text: props.graphicTextContent,
            textAlign: 'center',
            fill: 'var(--text-default)',
            fontSize: fontSize.value,
            fontWeight: '700',
            fontFamily: 'Pretendard JP',
          },
        },
      ]
    : [];

  return {
    tooltip: {
      trigger: 'item',
      confine: true, // 툴팁이 차트 영역을 벗어나지 않도록 제한
      formatter: (params: any) => {
        // 빈값(empty)이 있을 때는 어떤 pie 조각을 hover해도 전체 값 툴팁을 반환
        const dataArr = params?.series?.data || [];
        const hasEmpty = dataArr.some((d: any) => d.name === 'empty');
        if (hasEmpty && params.name === 'empty') {
          const realData = dataArr.filter((d: any) => d.name !== 'empty');
          if (!realData.length) return '';
          let result = `<div class="tooltip-title">합계</div>`;
          realData.forEach((d: any) => {
            result += `<div class="tooltip-item">
            ${d.marker || ''}
            <div class="tooltip-item-content">
              <span class="series-name">${d.name} </span>
              <span class="value">${d.value} (${d.percent !== undefined ? d.percent : ''}%)</span>
            </div>
            </div>`;
          });
          return result;
        }
        // 기존: 값이 0이면 툴팁 없음 (empty는 위에서 처리)
        if (!params || params.value === 0) return '';
        let result = `<div class="tooltip-title">${params.name}</div>`;
        result += `<div class="tooltip-item">
        ${params.marker}
        <div class="tooltip-item-content">
          <span class="series-name">${params.name} </span>
          <span class="value">${params.value} (${params.percent}%)</span>
        </div>
        </div>`;
        return result;
      },
    },
    legend: legendConfig,
    grid: gridConfig,
    series: visibleSeries,
    graphic: graphicConfig,
    animation: true,
    animationDuration: 1000,
    animationEasing: 'quarticOut',
    animationDurationUpdate: 200,
    animationEasingUpdate: 'cubicOut',
    universalTransition: true,
  };
});

const legendList = computed(() => {
  return seriesData.value[0].data
    .filter((item: any) => item.name !== 'empty') // empty 항목 제외
    .map((item: any, i: number) => ({
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
  return seriesData.value[0].data
    .filter((item: any) => item.name !== 'empty') // empty 항목 제외
    .map((item: any, itemIndex: number) => {
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
