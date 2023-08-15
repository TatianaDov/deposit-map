import { Graph, Node } from '@antv/x6';
import { SeriesOptionsType } from 'highcharts';

export type ConfigType = { [key: string]: string };
export type PreparedCategorizedChartData = {
  preparedData: SeriesOptionsType[];
  categories: string[];
};
export type DefaultRecord<T> = Record<string, T>;

export enum EnumCondition {
  OIL = 'oil',
  LIQUID = 'liquid',
  GAS = 'gas',
}

export type Theme = 'Default' | 'Dark' | 'Display';

export type NodeType = 'upng' | 'tl' | 'gsu';

export type ConditionItem = {
  label: string;
  id: EnumCondition;
};

export enum EnumDateMode {
  DAILY = 'daily',
  MONTHLY = 'monthly',
}

export type DateModeItem = {
  label: string;
  id: EnumDateMode;
};
export type DateFilterItem = [Date?, Date?];
export type ResponseStatus = {
  statusCode: number;
  statusMessage?: string;
};
export type DataStatus = {
  type: 'loading' | 'error' | 'calculating';
  status: string;
  message: string;
} | null;

export type PayloadResponse = {
  code?: number;
  message?: string;
};
export type TStateColor = 0 | 1 | 2;
export type TState = 0 | 1 | 2;

export type AntVComponentProps = {
  node: Node<Node.Properties>;
  graph: Graph;
};

export type RelatedObject = {
  childId: string[] | [];
  id: string;
  name: string;
  objType: number;
};

export type SearchedValue = {
  name: string;
  id: string;
};

// todo correct types for objects

export type TNodeData = {
  id: string;
  objType: number;
  // упнг

  oilProd?: number;
  oilProdColor?: TStateColor;
  oilProdDesc?: string;
  oilProdState?: TState;

  urgg?: number;
  urggState?: number;
  urggColor?: number;
  urggDesc?: string;

  vsp?: number;
  vspState?: number;
  vspDesc?: string;
  vspColor?: TStateColor;

  routeId?: number;
  iconColor?: string;
  tlId?: string;
  title?: string;

  pLinHigh?: null | number;
  pLinHighDesc?: string;
  pLinHighState?: null | number;
  pLinHighColor?: null | number;

  oilRate?: number;
  oilRateState?: number;
  oilRateDesc?: string;

  pLinLow?: number;
  pLinLowState?: number;
  pLinLowDesc?: string;
  pLinLowColor?: number;
  // гзу
  pAg?: number;
  pAgDesc?: string;
  pAgState?: number;
  pAgStateColor?: number;

  state: number;
  // objectState?: number;
};

export type InfraData = {
  id: string;
  shape?: string;
  name?: string;
  coordX: number;
  coordY: number;
  routeId?: number;
  objType?: number;
  x: number;
  y: number;
  ports?: { id: string; group: string }[];
  tlId: string;
  data?: TNodeData;
  // state: number;
  source?: string;
  target?: string;
  zIndex?: number;
  router?: string;
  attrs?: object;
  connector?: {
    name: string;
    args: object;
  };
};

export interface NodeDataProps {
  info: TNodeData | null;
}

type Checkbox = {
  name: string;
  params: Array<number>;
  checked: boolean;
};

export type TChartDefinition = {
  name: string;
  params: Array<keyof InfoParameters>;
  checkboxes?: Array<Checkbox>;
};

// типы параметров для графиков
export type InfoParameter = {
  shortName: string;
  unit: string;
};

export type InfoParameters = Record<number, InfoParameter>;

export type SidebarData = {
  dt: string;
  paramId: number;
  value: number;
};
