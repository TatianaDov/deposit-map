import './DepositsMap.scss';
import React, { useEffect } from 'react';
import { Graph } from '@antv/x6';
import { observer } from 'mobx-react-lite';
import { registerEdgeOptions } from './constants';
import { useGraphInstance } from './useGraphInstance';
import { rootStore } from '../../store';

Graph.registerEdge('dag-edge', registerEdgeOptions, true);

const DepositsMap = observer(() => {
  const ref = useGraphInstance();
  const { nodeDataUPNG, nodeTLData,nodeGsuData} = rootStore.depositsMap;

  const dataUpng = nodeDataUPNG.map(item => ({ id: item.id, shape: 'dag-node',x:item.coordX,y:item.coordY, data: { ...item } }));
  const dataTl = nodeTLData.map(item => ({ id: item.id, shape: 'dag-node',x:item.coordX,y:item.coordY, data: { ...item } }));
  const dataGsu = nodeGsuData.map(item => ({ id: item.id, shape: 'dag-simple-node',x:item.coordX,y:item.coordY, data: { ...item } }));
  const combinedData = [...dataUpng, ...dataTl,...dataGsu];


const lineData = combinedData.map(node => {
  const {objType, tlId}  =  node.data 

  let source = null
  let target = null

  if (objType === 1){
      target = 'UPNG'
      source = node.id
  }

  if (objType === 2){
    target = tlId
    source = node.id
  }

  return {
    shape:'dag-edge',
    id: String(Math.random() * Math.random()),
    source : {cell: source},
    target: {cell: target},
    zIndex: 0,
    attrs: {
      line: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
      },
    },
    router: 'manhattan',
    connector: {
      name: 'rounded',
      args: {},
    },
  };
})


  const init = (data: any[], graph: Graph) => {
    const cells: any[] = [];
    data.forEach(item => {
      if (item.shape === 'dag-simple-node' || item.shape === 'dag-node') {
        cells.push(graph.createNode(item));
      } else {
        cells.push(graph.createEdge(item));
      }
    });

    graph.resetCells(cells);
  };

  useEffect(() => {
    if (!ref?.current) return;
    
    
    init([...combinedData,...lineData], ref.current);

     ref?.current.zoomToFit();
  }, [ref, combinedData]);

  return <div></div>;
});

export default DepositsMap;
