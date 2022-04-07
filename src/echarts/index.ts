
import * as echarts from "echarts/core";
import {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  GaugeSeriesOption,
  PieSeriesOption,
  LinesSeriesOption,
  BarChart,
  GaugeChart,
  LineChart,
  RadarChart,
  PieChart,
  LineSeriesOption,
} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  DatasetComponentOption,
  LegendComponentOption,
  RadarComponentOption,
  RadarComponent,

  // 组件类型的定义后缀都为 ComponentOption  series.gauge
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | GaugeSeriesOption
  | PieSeriesOption
  | LinesSeriesOption
  | RadarComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  >;

// 注册必须的组件
echarts.use([
  TitleComponent,
  DatasetComponent,
  TooltipComponent,
  LegendComponent,
  RadarComponent,
  GridComponent,
  PieChart,
  RadarChart,
  BarChart,
  LineChart,
  GaugeChart,
  CanvasRenderer,
]);

export default echarts

