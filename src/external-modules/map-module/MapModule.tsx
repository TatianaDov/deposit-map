import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHost } from '../../hooks';
import { getRoutes } from '../../routes';
import { rootStore } from '../../store';

import routes from './routes';

const MapModule = (props: HostStore) => {
  const { fetchAll } = rootStore.depositsMap;
  useHost({ host: props, mount: fetchAll });

  return  getRoutes(routes)
};

export default observer(MapModule);
