import React, { useEffect, useRef } from 'react';
import { Graph } from '@antv/x6';
import { Selection } from '@antv/x6-plugin-selection';
import { register } from '@antv/x6-react-shape';

import { graphOptions, registerConfig, registerSimpleNode } from './constants';

export const useGraphInstance = () => {
  const ref = useRef<Graph | null>(null);
  
  
  useEffect(() => {
    register({
      shape: 'dag-simple-node',
      component: props => <></> ,
      ...registerSimpleNode,
    });

    register({
      shape: 'dag-node',
      component: props =>  <></>,
      ...registerConfig,
    });

    const container: HTMLElement | undefined = document.getElementById('container') || undefined;
    const graphInstance = new Graph({
      container,
      ...graphOptions,
    });

    graphInstance.use(
      new Selection({
        enabled: true,
        multiple: true,
        rubberEdge: false,
        rubberNode: false,
        modifiers: 'shift',
        rubberband: true,
      }),
    );

    ref.current = graphInstance;
  }, []);

  return ref;
};
