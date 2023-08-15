type Hourly = string | number;

export type ModelMeteo = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: Hourly[];
    temperature_2m: Hourly[];
    rain: Hourly[];
  };
};

export type MeteoParams = {
  latitude: number;
  longitude: number;
  start_date: string;
  end_date: string;
  hourly: 'temperature_2m';
  timeformat?: string;
};
