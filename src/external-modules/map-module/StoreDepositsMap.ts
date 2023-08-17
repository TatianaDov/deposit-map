import { makeAutoObservable } from 'mobx';
import { RootStore } from '../../store';
import { getDataInfra, getTNodeData, getGsuData,getRelatedObjects } from './apiMap';
import { InfraData, TNodeData, GsuData,RelatedObject } from './typesDepositsMap';

export class StoreDepositsMap {
  nodeDataUPNG: InfraData[] = [];
  nodeTLData: TNodeData[] = [];
  nodeGsuData: GsuData[] = [];
  dataRelatedObject:RelatedObject[]=[]
  readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchUpng = async () => {
    const { data } = await getDataInfra();

    this.nodeDataUPNG = data;
  };
  fetchTNodeData = async () => {
    const { data } = await getTNodeData();

    this.nodeTLData = data;
  };
  fetchGsuData = async () => {
    const { data } = await getGsuData();

    this.nodeGsuData = data;
  };
  fetchRelatedObjectData=async()=>{
const{data}= await getRelatedObjects()
this.dataRelatedObject = data;
  }
  fetchAll = () => {
    this.fetchUpng();
    this.fetchTNodeData();
    this.fetchGsuData();
  };
}
