import React, { useRef } from 'react';

import { observer } from 'mobx-react-lite';

import { useHost } from '../../../hooks';
import getRoutes from '../../../routes/getRoutes';
import { rootStore } from '../../../store';
import { SideBar } from '../../map-module/components/SideBar/SideBar';

import routes from '../routes';

const Meteo = () => {
  return (
    <div className="container container_column container_auto">
      <SideBar />
    </div>
  );
};

export default observer(Meteo);
