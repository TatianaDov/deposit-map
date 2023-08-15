import React from 'react';
import { observer } from 'mobx-react-lite';

import LineDate from '../../../components/charts/line-date';
import { rootStore } from '../../../store';

const MeteoTabFirst = () => {
  const { seriesOptions } = rootStore.meteo;

  if (!seriesOptions) {
    return <div>Load...</div>;
  }

  return (
    <div className="margin-l">
      <div>
        <LineDate height={300} data={seriesOptions} />
      </div>
    </div>
  );
};

export default observer(MeteoTabFirst);
