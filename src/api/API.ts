import axios from 'axios';

import { BASE_URL, CURRENT_USER } from '../appConfig';

const API = axios.create({
  baseURL: "http://localhost:3005/upng",
  responseType: 'json',
  headers: {
    'content-type': 'application/json',
  },
});

API.interceptors.request.use(config => {
  const token = sessionStorage.getItem(CURRENT_USER);
  if (token && config.headers) {
    const code = JSON.parse(token);
    config.headers.Authorization = `Bearer ${code.accessToken}`;
  }

  return config;
});

export default API;
