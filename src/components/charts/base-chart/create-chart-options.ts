import { Options } from 'highcharts';

import { BaseChartProps } from '../types';

export function createChartOptions(props: BaseChartProps): Options {
  const { height, width, series, customOptions } = props;

  return {
    chart: {
      backgroundColor: 'transparent',
      height,
      width,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '',
    },
    lang: {
      noData: 'Нет данных для отображения',
    },
    series,
    ...customOptions,
  };
}
