import { Options, PointOptionsObject, SeriesOptionsType } from 'highcharts';

export interface PieChartPoint {
  name: string;
  y: number;
  color: string;
}

export interface BaseChartProps {
  height: number;
  width: number;
  series: SeriesOptionsType[];
  customOptions?: Options;
}

export interface BaseChartPropsNew {
  data: Nullable<SeriesOptionsType>;
  height?: number | string;
  width?: number | string;
  xTitle?: string;
  yTitle?: string;
  customOptions?: Options;
}

export type SeriesData = (number | PointOptionsObject | null)[] | undefined;

export interface PieChartProps {
  pieData?: SeriesData;
  subtitle?: string;
  height?: number | string;
  width?: number | string;
  customOptions?: Options;
}
