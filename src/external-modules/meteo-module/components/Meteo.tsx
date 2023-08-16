import React from 'react';
import { observer } from 'mobx-react-lite';
import DepositsMap from '../../map-module/DepositsMap';
import { useHost } from '../../../hooks';
import getRoutes from '../../../routes/getRoutes';
import { rootStore } from '../../../store';
import { SideBar } from '../../map-module/components/SideBar/SideBar';
import routes from '../routes';


const Meteo = () => {
  return (
    <>
    <div className="container" id='container'/>
    <DepositsMap />
    <SideBar />
    </>
  );
};

export default observer(Meteo);
