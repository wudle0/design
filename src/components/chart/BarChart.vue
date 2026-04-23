<template>
  <a-card :bordered="props.bordered">
    <!-- 타이틀 슬롯 -->
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #extra>
      <slot name="extra"></slot>
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
        :legendUnit="props.legendUnit"
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
import { Echart, ChartLegend } from '@/components/chart';
import { Table } from '@/components/table';

interface BarData {
  xAxis: string[];
  name: string[];
  data: number[][] | number[];
}

interface Props {
  barData: BarData;
  unit?: string; // 단위
  height?: string; // 차트 높이
  legendSize?: 'small' | 'medium' | 'large' | 'scroll'; // 범례 크기
  tableSize?: 'medium' | 'large'; // table 크기
  showBackground?: boolean; // 그래프 배경
  vertical?: boolean; // 차트 방향
  orient?: 'horizontal' | 'vertical'; // 범례 방향
  multiLine?: boolean; // 범례 1줄/2줄 표시
  chartType?: 'stack' | 'group'; // 그래프 표시 방식
  filter?: boolean; // table legend 필터 표시 여부
  statusColors?: string[]; // 상태 색상 배열
  hideAxis?: boolean; // x, y축 숨김 여부
  hideXAxis?: boolean; // x축 숨김 여부
  hideYAxis?: boolean; // y축 숨김 여부
  customGrid?: Record<string, any>; // grid 설정을 커스텀으로 덮어쓸 수 있는 prop
  bordered?: boolean; // 카드 보더 표시 여부
  xAxisFormatter?: string; // x축 포맷터 (예: '{value}%')
  yAxisFormatter?: string; // x축 포맷터 (예: '{value}%')
  legendUnit?: string; // 범례 단위
  yAxisSplitNumber?: number; // y축 분할 개수
}

const props = withDefaults(defineProps<Props>(), {
  unit: '',
  height: '208px',
  legendSize: undefined,
  tableSize: undefined,
  showBackground: false,
  vertical: false,
  orient: 'horizontal',
  multiLine: false,
  chartType: 'stack',
  filter: false,
  statusColors: undefined,
  hideAxis: false,
  hideXAxis: false,
  hideYAxis: false,
  customGrid: undefined,
  bordered: true,
  xAxisFormatter: undefined,
  yAxisFormatter: undefined,
  yAxisSplitNumber: undefined,
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

// barData에서 seriesData 생성
const seriesData = computed((): SeriesItem[] => {
  // 2차원 배열인 경우
  if (Array.isArray(props.barData.data[0])) {
    const data2D = props.barData.data as number[][];

    return data2D.map((dataRow, index) => ({
      name: props.barData.name[index] || `Series ${index + 1}`,
      data: dataRow,
      showBackground: props.showBackground,
      ...(props.chartType === 'stack' && { stack: 'total' }), // 스택 타입일 때만 stack 추가
    }));
  }
  // 1차원 배열인 경우 각 데이터를 개별 시리즈로 처리
  else {
    const data1D = props.barData.data as number[];

    return data1D.map((value, index) => ({
      name: props.barData.name[index] || `Series ${index + 1}`,
      data: Array(data1D.length)
        .fill(0)
        .map((_, i) => (i === index ? value : 0)),
      showBackground: props.showBackground,
      ...(props.chartType === 'stack' && { stack: 'total' }),
    }));
  }
});

// 각 시리즈의 가시성 상태
const visibility = reactive<boolean[]>(
  computed(() => seriesData.value.map(() => true)).value
);

// 각 legend별로 데이터가 하나만 존재하는지 확인
const isSingleDataPerLegend = computed(() => {
  // 2차원 배열인 경우에만 체크
  if (Array.isArray(props.barData.data[0])) {
    const data2D = props.barData.data as number[][];
    return data2D.every((dataRow) => {
      // 각 row에서 0이 아닌 값이 하나만 있는지 확인
      const nonZeroCount = dataRow.filter((value) => value !== 0).length;
      return nonZeroCount === 1;
    });
  }
  return false;
});

// 차트 옵션 생성
const chartOption = computed(() => {
  const visibleSeries = seriesData.value.map((series, i) => ({
    ...series,
    type: 'bar',
    // chartType이 group이거나 각 legend별로 데이터가 하나만 있을 때 barWidth 16px
    ...((props.chartType === 'group' || isSingleDataPerLegend.value) && {
      barWidth: 16,
    }),
    data: visibility[i] ? series.data : series.data.map(() => 0),
    ...(series.stack && { stack: series.stack }), // 스택 속성이 있으면 전달
    // 상태 색상이 있으면 적용
    ...(props.statusColors &&
      props.statusColors[i] && {
        itemStyle: {
          color: props.statusColors[i],
        },
      }),
    // showBackground가 true일 때 배경색 설정
    ...(props.showBackground && {
      showBackground: true,
      backgroundStyle: {
        color: 'var(--chart-background01)',
      },
      barCategoryGap: '40%',
    }),
  }));

  const xAxisConfig = props.vertical
    ? {
        type: 'category',
        data: props.barData.xAxis,
        show: !props.hideAxis && !props.hideXAxis,
      }
    : {
        type: 'value',
        show: !props.hideAxis && !props.hideXAxis,
        ...(props.xAxisFormatter && {
          axisLabel: {
            formatter: props.xAxisFormatter,
          },
        }),
        ...(props.yAxisFormatter && {
          axisLabel: {
            formatter: props.yAxisFormatter,
          },
        }),
      };

  const yAxisConfig = props.vertical
    ? {
        type: 'value',
        show: !props.hideAxis && !props.hideYAxis,
        splitNumber: props.yAxisSplitNumber,
        ...(props.yAxisFormatter && {
          axisLabel: {
            formatter: props.yAxisFormatter,
          },
        }),
      }
    : {
        type: 'category',
        data: props.barData.xAxis,
        show: !props.hideAxis && !props.hideYAxis,
        axisLabel: {
          width: 80,
          overflow: 'truncate',
        },
      };

  let gridConfig: any = {
    top: 16,
    left: 16,
    right: props.vertical ? 16 : 32,
    bottom:
      props.orient === 'vertical' && props.legendSize === 'scroll' ? 26 : 16,
    containLabel: true,
    ...(props.customGrid || {}),
  };
  let legendConfig: any = {
    show: (props.legendSize as string) === 'scroll',
    orient: 'horizontal',
    type: 'scroll',
    itemWidth: 10,
    itemHeight: 10,
    pageIconSize: 6,
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
            <span class="value">${param.value === 0 ? '00' : param.value}${props.unit ? ' ' + props.unit : ''}</span>
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
  const allLegends = seriesData.value.map((series, i) => {
    // 각 시리즈의 최대값 찾기
    const maxValue = Math.max(...series.data);

    return {
      key: String(i + 1),
      label: series.name,
      value:
        (Math.round(maxValue) === 0 ? '00' : String(Math.round(maxValue))) +
        (props.unit ? ' ' + props.unit : ''),
      visible: visibility[i],
    };
  });

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
  props.barData.xAxis.forEach((xAxisLabel, index) => {
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
    props.barData.xAxis.forEach((xAxisLabel, xAxisIndex) => {
      const value = series.data[xAxisIndex] || 0;
      const formattedValue = value === 0 ? '00' : String(value);
      row[`value${xAxisIndex + 1}`] =
        formattedValue + (props.unit ? ' ' + props.unit : '');
    });

    return row;
  });
});
const handleTableRowClick = (record: any) => {
  const seriesIndex = parseInt(record.key) - 1;
  handleLegendClick(seriesIndex);
};
</script>
