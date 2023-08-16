import { StoreDepositsMap } from '../external-modules/map-module';
import { StoreMeteo } from '../external-modules/meteo-module/storeMeteo';

import { StoreHost } from './storeHost';

class RootStore {
  host: StoreHost;
  meteo: StoreMeteo;
  depositsMap: StoreDepositsMap;

  constructor() {
    this.host = new StoreHost();
    this.meteo = new StoreMeteo(this);
    this.depositsMap = new StoreDepositsMap(this);
  }
}

const rootStore = new RootStore();

export { RootStore, rootStore };
