import './DepositsMap.scss';

import React from 'react';
import { Graph } from '@antv/x6';
import { observer } from 'mobx-react-lite';


import { registerEdgeOptions } from './constants';


Graph.registerEdge('dag-edge', registerEdgeOptions, true);

const DepositsMap = () => null

export default observer(DepositsMap);
