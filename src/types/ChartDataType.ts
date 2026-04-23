import * as echarts from 'echarts/core';
import {
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
  GridComponentOption,
  MarkLineComponentOption,
} from 'echarts/components';
import {
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
export type EchartsType = echarts.ComposeOption<
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
