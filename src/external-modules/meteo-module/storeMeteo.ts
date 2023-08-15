import { DateRange } from '@consta/uikit/__internal__/src/utils/types/Date';
import { SeriesOptionsType } from 'highcharts';
import { makeAutoObservable } from 'mobx';

import { RootStore } from '../../store';
import { DataStatusType } from '../../typings';
import { getShortDate } from '../../utils';

import { getPrepareData } from './utils/utils';
import { getMeteo } from './apiMeteo';
import { MeteoParams, ModelMeteo } from './model-meteo';

const ParamsInit: MeteoParams = {
  longitude: 52.52,
  latitude: 13.41,
  start_date: '2022-01-01',
  end_date: '2022-07-13',
  hourly: 'temperature_2m',
};

export class StoreMeteo {
  counter = 0;
  title: Nullable<string> = null;
  startDate: Date;
  endDate: Date;
  dataStatus: Nullable<DataStatusType> = null;
  params: MeteoParams = ParamsInit;
  dataSeries: Nullable<ModelMeteo> = null;
  seriesOptions: Nullable<SeriesOptionsType> = null;

  readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.startDate = new Date('2023-01-01');
    this.endDate = new Date('2023-01-03');
  }

  inc = () => ++this.counter;
  dec = () => --this.counter;

  setDataStatus = (dataStatus: Nullable<DataStatusType>) => (this.dataStatus = dataStatus);

  fetchMeteo = () => {
    this.setDataStatus('loading');
    getMeteo(this.params)
      .then(response => {
        this.setDataSeries(response.data);
        this.preparedData();
        this.setDataStatus(null);
      })
      .catch(() => {
        this.setDataStatus('error');
      });
  };

  private setDataSeries = (data: ModelMeteo) => {
    this.dataSeries = data;
  };

  setParamsDate = (dateRange: Nullable<DateRange>) => {
    if (!dateRange) return;
    const [startDate, endDate] = dateRange;
    if (startDate && endDate) {
      this.params.start_date = getShortDate(startDate);
      this.params.end_date = getShortDate(endDate);
    }
  };

  get dateRange(): DateRange {
    return [new Date(this.params.start_date), new Date(this.params.end_date)];
  }

  fetchAll = (filterBody: FilterBody) => {
    const { dataRange } = filterBody;
    if (dataRange) {
      this.setParamsDate(dataRange);
      this.fetchMeteo();
    }
  };

  private preparedData = () => {
    if (this.dataSeries) {
      this.seriesOptions = getPrepareData(this.dataSeries);
    }
  };
}
