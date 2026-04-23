<template>
  <a-card :bordered="props.bordered">
    <!-- 타이틀 슬롯 -->
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
        :lists="legendLists"
        :size="props.legendSize"
        :height="props.height"
        :toggleAllLegend="props.toggleAllLegend"
        @clickLegendItem="handleLegendClick"
        @toggleAllLegends="handleToggleAllLegends"
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
        layout="auto"
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
import { Echart, ChartLegend } from '@/components/chart';
import { Table } from '@/components/table';

interface LineData {
  xAxis: string[];
  name: string[];
  data: number[][] | number[];
}

interface Props {
  lineData: LineData;
  unit?: string; // 단위
  height?: string; // 차트 높이
  legendSize?: 'small' | 'medium' | 'large' | 'scroll'; // 범례 크기
  tableSize?: 'medium' | 'large'; // table 크기
  showBackground?: boolean; // 그래프 배경
  vertical?: boolean; // 차트 방향
  orient?: 'horizontal' | 'vertical'; // 범례 방향
  multiLine?: boolean; // 범례 1줄/2줄 표시
  chartType?: 'stack' | 'group'; // 그래프 표시 방식
  area?: boolean; // 그래프 형식 area로 변경
  filter?: boolean; // table legend 필터 표시 여부
  toggleAllLegend?: boolean; // 전체 해제 버튼 표시 여부
  bordered?: boolean; // 카드 테두리 표시 여부
  hideXAxis?: boolean; // x축 숨김 여부
  hideYAxis?: boolean; // y축 숨김 여부
  yAxisFormatter?: string; // x축 포맷터 (예: '{value}%')
}

const props = withDefaults(defineProps<Props>(), {
  unit: '',
  height: '208px',
  legendSize: undefined,
  tableSize: undefined,
  showBackground: false,
  vertical: true, // 라인차트는 기본이 vertical
  orient: 'horizontal',
  multiLine: false,
  chartType: 'stack',
  area: false,
  filter: false,
  toggleAllLegend: false,
  bordered: true,
  hideXAxis: false,
  hideYAxis: false,
  yAxisFormatter: undefined,
});

const emit = defineEmits<{
  (e: 'legendToggle', index: number, visible: boolean): void;
}>();

// 시리즈 데이터 타입 정의
interface SeriesItem {
  name: string;
  data: number[];
  showBackground: boolean;
  stack?: string;
}

// lineData에서 seriesData 생성
const seriesData = computed((): SeriesItem[] => {
  // 2차원 배열인 경우
  if (Array.isArray(props.lineData.data[0])) {
    const data2D = props.lineData.data as number[][];

    return data2D.map((dataRow, index) => ({
      name: props.lineData.name[index] || `Series ${index + 1}`,
      data: dataRow,
      showBackground: props.showBackground,
      ...(props.chartType === 'stack' && { stack: 'total' }), // 스택 타입일 때만 stack 추가
    }));
  }
  // 1차원 배열인 경우 하나의 시리즈로 처리
  else {
    return [
      {
        name: 'Series 1',
        data: props.lineData.data as number[],
        showBackground: props.showBackground,
      },
    ];
  }
});

// 각 시리즈의 가시성 상태
const visibility = reactive<boolean[]>(
  computed(() => seriesData.value.map(() => true)).value
);

// 차트 옵션 생성
const chartOption = computed(() => {
  const visibleSeries = seriesData.value.map((series, i) => {
    const isVisible = visibility[i];
    const finalData = isVisible ? series.data : series.data.map(() => null);

    return {
      ...series,
      type: 'line',
      showSymbol: false,
      lineStyle: {
        width: 1.5,
      },
      data: finalData,
      ...(props.area ? { areaStyle: { opacity: 0.16 } } : {}),
    };
  });

  const xAxisConfig = props.vertical
    ? {
        type: 'category',
        data: props.lineData.xAxis,
        boundaryGap: false,
        show: !props.hideXAxis,
      }
    : { type: 'value', show: !props.hideXAxis };

  const yAxisConfig = props.vertical
    ? {
        type: 'value',
        show: !props.hideYAxis,
        ...(props.yAxisFormatter && {
          axisLabel: {
            formatter: props.yAxisFormatter,
          },
        }),
      }
    : { type: 'category', data: props.lineData.xAxis, show: !props.hideYAxis };

  let gridConfig: any = {
    top: 16,
    left: 16,
    right: 16,
    bottom:
      props.orient === 'vertical' && props.legendSize === 'scroll' ? 46 : 16,
    containLabel: true,
  };
  let legendConfig: any = {
    show: (props.legendSize as string) === 'scroll',
    orient: 'horizontal',
    type: 'scroll',
    itemWidth: 10,
    itemHeight: 10,
    pageIconSize: 10,
    icon: 'path://M2,0 Q0,0 0,2 L0,8 Q0,10 2,10 L8,10 Q10,10 10,8 L10,2 Q10,0 8,0 Z',
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
      trigger: 'axis',
      confine: true, // 툴팁이 차트 영역을 벗어나지 않도록 제한
      formatter: (params: any) => {
        const validParams = params.filter((param: any) => param.value !== 0);
        if (validParams.length === 0) return '';

        let title = `<div class="tooltip-title">${validParams[0].axisValue}</div>`;
        let items = `<div class="tooltip-item-wrap">`;

        validParams.forEach((param: any) => {
          items += `
        <div class="tooltip-item">
          ${param.marker}
          <div class="tooltip-item-content">
            <span class="series-name">${param.seriesName} </span>
            <span class="value">${param.value}</span>
          </div>
        </div>`;
        });

        items += `</div>`;

        return title + items;
      },
    },
    legend: legendConfig,
    grid: gridConfig,
    xAxis: xAxisConfig,
    yAxis: yAxisConfig,
    series: visibleSeries,
    animation: true,
    animationDuration: 1000,
    animationEasing: 'quarticOut',
    animationDurationUpdate: 200,
    animationEasingUpdate: 'cubicOut',
    universalTransition: true,
  };
});

// ChartLegend용 범례
const legendLists = computed(() => {
  const allLegends = seriesData.value.map((series, i) => ({
    key: String(i + 1),
    label: series.name,
    value: String(Math.round(series.data[series.data.length - 1] ?? 0)),
    visible: visibility[i],
  }));

  if (props.multiLine) {
    // multiLine이 true면 전체를 2등분
    const half = Math.ceil(allLegends.length / 2);
    const firstHalf = allLegends.slice(0, half);
    const secondHalf = allLegends.slice(half);

    // 두 번째 배열이 있을 때만 2개로 나누고, 없으면 1개만
    return secondHalf.length > 0 ? [firstHalf, secondHalf] : [firstHalf];
  } else {
    // multiLine이 false면 하나의 배열로
    return [allLegends];
  }
});

const handleLegendClick = (index: number) => {
  visibility[index] = !visibility[index];
  emit('legendToggle', index, visibility[index]);
};

const handleToggleAllLegends = (shouldActivate: boolean) => {
  for (let i = 0; i < visibility.length; i++) {
    visibility[i] = shouldActivate;
    emit('legendToggle', i, shouldActivate);
  }
};

// ChartTable용 범례
const tableColumns = computed(() => {
  const columns: any[] = [
    {
      title: 'Label',
      dataIndex: 'label',
      filterSearch: true,
    },
  ];

  // 각 xAxis에 대한 컬럼 추가 (A, B, C...)
  props.lineData.xAxis.forEach((xAxisLabel, index) => {
    columns.push({
      title: xAxisLabel,
      dataIndex: `value${index + 1}`,
      filterSearch: true,
    });
  });

  return columns;
});
const tableData = computed(() => {
  return seriesData.value.map((series, seriesIndex) => {
    const row: any = {
      key: String(seriesIndex + 1),
      label: series.name, // Legend1, Legend2...
    };

    // 각 xAxis별 값 추가 (A, B, C 컬럼의 값들)
    props.lineData.xAxis.forEach((xAxisLabel, xAxisIndex) => {
      const value = series.data[xAxisIndex] || 0;
      row[`value${xAxisIndex + 1}`] = String(value);
    });

    return row;
  });
});
const handleTableRowClick = (record: any) => {
  const seriesIndex = parseInt(record.key) - 1;
  handleLegendClick(seriesIndex);
};
</script>
