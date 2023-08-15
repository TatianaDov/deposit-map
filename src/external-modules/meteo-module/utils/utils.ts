import { SeriesOptionsType } from 'highcharts';

import { ModelMeteo } from '../model-meteo';

const getPrepareData = (meteoData: ModelMeteo): SeriesOptionsType => {
  const { temperature_2m, time } = meteoData.hourly;
  const series: SeriesOptionsType = {
    type: 'line',
    name: 'Temperature',
    data: [],
  };
  temperature_2m.forEach((element, index) => {
    const date = new Date(time[index]).valueOf();
    series.data!.push([date, element]);
  });
  return series;
};

export { getPrepareData };
