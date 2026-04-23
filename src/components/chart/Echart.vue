<template>
  <div class="chart-area">
    <div class="chart-area-unit" v-if="props.unit">{{ props.unit }}</div>
    <div
      class="chart-list"
      v-if="props.showCenterValues"
      :style="{ top: props.chartListTop }"
    >
      <a-flex gap="4">
        <span class="unit">Used</span>
        <span class="unit-number">
          {{ props.centerFirstValue }} {{ props.centerFirstValueUnit }}</span
        >
      </a-flex>
      <a-flex gap="4">
        <span class="unit">Total</span>
        <span class="unit-number"
          >{{ props.centerSecondaryValue }}
          {{ props.centerSecondaryValueUnit }}</span
        >
      </a-flex>
    </div>
    <v-chart
      :theme="isDarkMode ? 'dark' : 'light'"
      class="chart"
      :option="props.chartData"
      :loading="props.loading"
      autoresize
    />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import * as echarts from 'echarts/core';
import type { ComposeOption } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import {
  BarChart,
  GaugeChart,
  GraphChart,
  HeatmapChart,
  LineChart,
  PieChart,
  ScatterChart,
  TreeChart,
  TreemapChart,
} from 'echarts/charts';
import type {
  LineSeriesOption,
  BarSeriesOption,
  PieSeriesOption,
  ScatterSeriesOption,
  TreeSeriesOption,
  TreemapSeriesOption,
  GraphSeriesOption,
  HeatmapSeriesOption,
  GaugeSeriesOption,
} from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GraphicComponent,
} from 'echarts/components';
import type {
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
  GridComponentOption,
  MarkLineComponentOption,
} from 'echarts/components';
import { UniversalTransition } from 'echarts/features';
import eChartTheme from '@/assets/data/eChartTheme.json';
import { useTheme } from '@/hooks/theme/useTheme';
import VChart from 'vue-echarts';

onBeforeMount(() => {
  echarts.use([
    DataZoomComponent,
    GridComponent,
    LegendComponent,
    MarkAreaComponent,
    MarkLineComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    VisualMapComponent,
    GraphicComponent,
    BarChart,
    GaugeChart,
    GraphChart,
    HeatmapChart,
    LineChart,
    PieChart,
    ScatterChart,
    TreeChart,
    TreemapChart,
    SVGRenderer,
    UniversalTransition,
  ]);
  // Register theme from eChartTheme.json
  echarts.registerTheme('light', eChartTheme.light);
  echarts.registerTheme('dark', eChartTheme.dark);
});

type EChartsOption = ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | GridComponentOption
  | MarkLineComponentOption
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
  | ScatterSeriesOption
  | TreeSeriesOption
  | TreemapSeriesOption
  | GraphSeriesOption
  | HeatmapSeriesOption
  | GaugeSeriesOption
>;

const props = defineProps({
  chartData: {
    type: Object as () => EChartsOption,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  unit: {
    type: String,
    default: '',
  },
  showCenterValues: {
    type: Boolean,
    default: false,
  },
  centerFirstValue: {
    type: String,
    default: '',
  },
  centerFirstValueUnit: {
    type: String,
    default: '',
  },
  centerSecondaryValue: {
    type: String,
    default: '',
  },
  centerSecondaryValueUnit: {
    type: String,
    default: '',
  },
  centerContentUsed: {
    type: Number,
    default: 0,
  },
  centerContentTotal: {
    type: Number,
    default: 0,
  },
  centerContentUnit: {
    type: String,
    default: '',
  },
  chartListTop: {
    type: String,
    default: '',
  },
});

const { isDarkMode } = useTheme();
</script>
