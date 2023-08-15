import { TextPropSize, TextPropView } from '@consta/uikit/Text';

export interface ChartLegendProps {
  legends: ChartLegendItem[];
  itemClassName?: string;
  size?: TextPropSize;
  view?: TextPropView;
}

export interface ChartLegendItem {
  id: string;
  text: string;
  color: string;
}
