import API from '../../api/API';

import { MeteoParams, ModelMeteo } from './model-meteo';

const getMeteo = (params: MeteoParams) => {
  return API.get<ModelMeteo>('', { params });
};

export { getMeteo };
