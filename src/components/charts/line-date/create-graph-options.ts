import { BaseChartPropsNew } from '../types';

const createGraphOptions = (props: BaseChartPropsNew) => {
  const { height, width, data, customOptions } = props;

  return {
    chart: {
      width,
      height,
      zoomType: 'x',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      lineWidth: 1,
      title: {
        text: '°C',
      },
      stackLabels: {
        enabled: false,
      },
      gridLineWidth: 1,
      gridLineDashStyle: 'Dash',
      minPadding: 0,
      maxPadding: 0,
    },
    legend: {
      itemMarginTop: 10,
      itemMarginBottom: 10,
      itemStyle: {
        fontWeight: '400',
      },
    },
    series: [data],
    ...customOptions,
  };
};

export default createGraphOptions;
