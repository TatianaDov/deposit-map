import { makeAutoObservable } from 'mobx';
import { RootStore } from '../../store';
import { getInfra } from './apiMap';

export class StoreDepositsMap {
  myNodeName =  []
  readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchMap = async () => {
      const {data} = await getInfra()

    this.myNodeName = data
     


  };
}
