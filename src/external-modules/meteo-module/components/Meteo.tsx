import React from 'react';
import { observer } from 'mobx-react-lite';
import DepositsMap from '../../map-module/DepositsMap';
import  SideBar  from '../../map-module/components/SideBar/SideBar';


const Meteo = () => {
  return (
    <>
    <div id='container'/>
    <DepositsMap />
    <SideBar />
    </>
  );
};

export default observer(Meteo);
