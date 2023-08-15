import React from 'react';
import HighchartsReact from 'highcharts-react-official';

import Highcharts from '../init-highcharts';
import { BaseChartPropsNew } from '../types';

import createGraphOptions from './create-graph-options';

const LineDate = (props: BaseChartPropsNew) => {
  const options = createGraphOptions(props);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineDate;
