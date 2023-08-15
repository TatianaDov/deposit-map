import React, { FC, useEffect, useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import { observer } from 'mobx-react-lite';

import { rootStore } from '../../../store';
import Highcharts from '../init-highcharts';
import { BaseChartProps } from '../types';

import { createChartOptions } from './create-chart-options';

const BaseChart: FC<BaseChartProps> = props => {
  const options = createChartOptions(props);
  // const ref = useRef<HighchartsChart>(null);
  const ref = useRef<HighchartsReact.RefObject>(null);

  const { drawerWidth } = rootStore.depositsMap;

  useEffect(() => {
    ref.current?.chart?.reflow();
  }, [drawerWidth]);

  return <HighchartsReact ref={ref} highcharts={Highcharts} options={options} />;
};

export default observer(BaseChart);
