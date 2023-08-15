import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { rootStore } from '../../store';
import { Header } from '../module-header/Header';
import { SideBar } from '../../external-modules/map-module/components/SideBar/SideBar';
import Meteo from '../../external-modules/meteo-module/components/Meteo';


const mockStore: InterfaceStoreHost = {
  setMessage: null,
  filterUnSubscribe: null,
  filterSubscribe: null,
  setOption: null,
};

const filterBody: FilterBody = {
  companyId: 'orb',
  dataRange: [new Date(), new Date()],
  datePeriodType: 'day',
  dateTo: new Date(),
  items: [],
  params: null,
};

function MainModule() {
  const { fetchAll } = rootStore.meteo;
  useEffect(() => {
    fetchAll(filterBody);
  }, []);

  return (
   <><Header/>
   <Meteo/>
   </>
   
  );
}

export default observer(MainModule);
