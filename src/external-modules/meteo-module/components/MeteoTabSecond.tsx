import React from 'react';
import { observer } from 'mobx-react-lite';

import { rootStore } from '../../../store';

import MeteoMessageButton from './MeteoMessageButton';

const MeteoTabSecond = () => {
  const { counter } = rootStore.meteo;
  return (
    <div className="margin-l">
      <h1>Title first </h1>
      <h3>Click dino: {counter}</h3>
      <MeteoMessageButton />
    </div>
  );
};

export default observer(MeteoTabSecond);
