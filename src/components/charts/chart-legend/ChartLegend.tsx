import React from 'react';
import { Text } from '@consta/uikit/Text';

import { ChartLegendProps } from './types';

const ChartLegend = (props: ChartLegendProps) => {
  const { legends, itemClassName, size, view } = props;

  return (
    <>
      {legends.map(row => (
        <div className={itemClassName} key={row.id}>
          <span className="status-icon margin-r-xs" style={{ background: row.color }} />
          <Text size={size} as="span" view={view}>
            {row.text}
          </Text>
        </div>
      ))}
    </>
  );
};

export default ChartLegend;
