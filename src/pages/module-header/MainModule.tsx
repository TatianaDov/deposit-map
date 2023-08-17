import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { rootStore } from '../../store';
import { Header } from '../module-header/Header';
import Meteo from '../../external-modules/meteo-module/components/Meteo';



function MainModule() {
  const { fetchAll } = rootStore.depositsMap;
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <Header />
      <Meteo />
    </>
  );
}

export default observer(MainModule);
