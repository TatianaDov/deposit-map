import { Graph } from '@antv/x6';
import { ReactShapeConfig } from '@antv/x6-react-shape';
import { BadgePropStatus } from '@consta/uikit/__internal__/src/components/Badge/Badge';
import { IconComponent } from '@consta/uikit/__internal__/src/icons/Icon/Icon';
import { IconDown } from '@consta/uikit/IconDown';
import { IconRemove } from '@consta/uikit/IconRemove';
import { IconTop } from '@consta/uikit/IconTop';

import { InfoParameters, NodeType, TChartDefinition, Theme, TNodeData } from '../typesDepositsMap';

export const defaultSidebarSize = 350;

// ключи данных для проверки
export const dataKeys = ['pAg', 'pLinLow', 'pLinHigh', 'oilRate', 'vsp', 'urgg', 'oilProd'] as Array<keyof TNodeData>;

export enum ObjectTypeEnum {
  upng = 0,
  tl = 1,
  gsu = 2,
}

export const tabItems = ['Информация', 'Связанные объекты'];

export type TLid = 'TL1' | 'TL2' | 'TL3' | 'TL4';

export const TLColors: Record<TLid, string> = {
  // TL1: 'var(--chart-color-9)',
  TL1: '#9CA3FF',
  TL2: '#FFBD59',
  TL3: '#32B4FF',
  TL4: '#3B4195',
};

export const badgeStatus: Record<number, BadgePropStatus> = {
  0: 'system',
  1: 'success',
  2: 'error',
};
export const badgeIcon: Record<number, IconComponent> = {
  0: IconRemove,
  1: IconTop,
  2: IconDown,
};

export type dayItem = {
  label: string;
  id: number;
  value: DatePeriod;
};

export const dayFilterItems: dayItem[] = [
  {
    label: 'День',
    value: 'day',
    id: 1,
  },
  {
    label: 'Месяц',
    value: 'month',
    id: 2,
  },
  // { // заготовка под разные варианты фильтра
  //   label: 'Три месяца',
  //   value: 'three',
  //   id: 3,
  // },
  // {
  //   label: 'Полгода',
  //   value: 'half',
  //   id: 4,
  // },
  // {
  //   label: 'Год',
  //   value: 'year',
  //   id: 5,
  // },
  // {
  //   label: 'Настройки',
  //   value: 'setting',
  //   id: 6,
  // },
];
export const themeValues: Theme[] = ['Default', 'Dark'];

// export const registerConfig: Omit<ReactShapeConfig, 'component'> = {
//   width: 96,
//   height: 96,
//   portMarkup: [
//     {
//       tagName: 'rect',
//       selector: 'body',
//     },
//     {
//       tagName: 'circle',
//       selector: 'circle',
//       className: 'x6-port-body',
//     },
//     {
//       tagName: 'g',
//       selector: 'buttonGroup',
//       children: [
//         {
//           tagName: 'path',
//           selector: 'buttonSign',
//           attrs: {
//             'pointer-events': 'none',
//           },
//         },
//       ],
//     },
//   ],
//   ports: {
//     groups: {
//       top: {
//         position: 'top',
//         attrs: {
//           circle: {
//             r: 8,
//             magnet: false,
//             stroke: '#C2C8D5',
//             strokeWidth: 1,
//             fill: '#fff',
//             cursor: 'pointer',
//             event: 'node:top',
//           },
//           buttonGroup: {
//             refX: '100%',
//             refY: '50%',
//           },
//           buttonSign: {
//             refX: -5,
//             refY: -5,
//             stroke: 'grey',
//             strokeWidth: 1.6,
//             d: 'M 2 5 8 5',
//           },
//         },
//       },
//       bottom: {
//         position: 'bottom',
//         attrs: {
//           circle: {
//             r: 8,
//             magnet: false,
//             stroke: '#C2C8D5',
//             strokeWidth: 1,
//             fill: '#fff',
//             cursor: 'pointer',
//             event: 'node:bottom',
//           },
//           buttonGroup: {
//             refX: '100%',
//             refY: '50%',
//           },
//           buttonSign: {
//             refX: -5,
//             refY: -5,
//             stroke: 'grey',
//             strokeWidth: 1.6,
//             d: 'M 2 5 8 5',
//           },
//         },
//       },
//       left: {
//         position: 'left',
//         attrs: {
//           circle: {
//             r: 8,
//             magnet: false,
//             stroke: '#C2C8D5',
//             strokeWidth: 1,
//             fill: '#fff',
//             cursor: 'pointer',
//             event: 'node:left',
//           },
//           buttonGroup: {
//             refX: '100%',
//             refY: '50%',
//           },
//           buttonSign: {
//             refX: -5,
//             refY: -5,
//             stroke: 'grey',
//             strokeWidth: 1.6,
//             d: 'M 2 5 8 5',
//           },
//         },
//       },
//       right: {
//         position: 'right',
//         attrs: {
//           circle: {
//             r: 8,
//             magnet: false,
//             stroke: '#C2C8D5',
//             strokeWidth: 1,
//             fill: '#fff',
//             cursor: 'pointer',
//             event: 'node:right',
//           },
//           buttonGroup: {
//             refX: '100%',
//             refY: '50%',
//           },
//           buttonSign: {
//             refX: -5,
//             refY: -5,
//             stroke: 'grey',
//             strokeWidth: 1.6,
//             d: 'M 2 5 8 5',
//           },
//         },
//       },
//     },
//   },
// };

export const registerSimpleNode: Omit<ReactShapeConfig, 'component'> = {
  width: 96,
  height: 48,
};

export const graphOptions: Graph.Options = {
  panning: {
    enabled: true,
    eventTypes: ['leftMouseDown', 'mouseWheel'],
  },
  mousewheel: {
    enabled: true,
    modifiers: 'ctrl',
    factor: 1.1,
    maxScale: 1.5,
    minScale: 0.5,
  },
  interacting: function () {
    return { nodeMovable: false };
  },
};

export const registerEdgeOptions = {
  inherit: 'edge',
  angle: 90,
  attrs: {
    line: {
      stroke: '#C2C8D5',
      strokeWidth: 1,
      targetMarker: null,
    },
  },
};
