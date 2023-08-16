import './DepositsMap.scss';
import React, { useRef, useEffect } from 'react';
import { Graph } from '@antv/x6';
import { observer } from 'mobx-react-lite';
import { registerEdgeOptions } from './constants';
import { useGraphInstance } from './useGraphInstance';
import { rootStore } from '../../store';
Graph.registerEdge('dag-edge', registerEdgeOptions, true);

const DepositsMap = observer(() => {
  const ref = useGraphInstance();
  const {myNodeName} = rootStore.depositsMap;

  const init = (myNodeName: any[], graph: Graph) => {
    const cells: any[] = [];
    myNodeName.forEach(item => {
      if (item.shape === 'dag-simple-node') {
        cells.push(graph.createNode(item));
      } else {
        //cells.push(graph.createEdge(item));
      }
    });

    graph.resetCells(cells);
  };

  useEffect(() => {
    if (!ref?.current) return;

    init(
      [
        {
          id: 'node1',
          x: 40,
          y: 40,
          name: 'gfgfg',
          shape: 'dag-simple-node',
          zIndex: 2,
        },
      ],
      ref.current,
    );

    ref?.current.zoomToFit();
  }, [ref]);

  return <div></div>;
});

export default DepositsMap;
