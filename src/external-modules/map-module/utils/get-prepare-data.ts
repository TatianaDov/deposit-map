import { SeriesOptionsType } from 'highcharts';

import { MeteoModel } from '../typesDepositsMap';

const getPrepareData = (meteoData: MeteoModel): SeriesOptionsType => {
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
