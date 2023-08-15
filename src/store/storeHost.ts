import { MODULE_NAME } from '../appConfig';

type subscribeInitEventHandler = (props: { callback: FilterEventCallback; hostOption?: HostOption }) => void;

export class StoreHost implements InterfaceStoreHost {
  setMessage: Nullable<SetMessageFn> = null;
  filterSubscribe: Nullable<FilterEvent> = null;
  filterUnSubscribe: Nullable<FilterEvent> = null;
  setOption: Nullable<HostOptionEventHandler> = null;

  init = (props: HostStore) => {
    const { setMessage, filterSubscribe, filterUnSubscribe, setOption } = props.storeHost;
    this.setMessage = setMessage;
    this.filterSubscribe = filterSubscribe;
    this.filterUnSubscribe = filterUnSubscribe;
    this.setOption = setOption;
  };

  sendMessage: SetMessageFn = (message, status) => {
    if (this.setMessage) {
      this.setMessage(message, status);
    }
  };

  updateOption = (hostOption: HostOption) => {
    if (this.setOption) {
      this.setOption(hostOption);
    }
  };

  subscribeInit: subscribeInitEventHandler = props => {
    // doc: Настройки необходимо применить до отправки методов событий !
    if (this.setOption) {
      this.setOption(props.hostOption);
    }
    if (this.filterSubscribe) {
      this.filterSubscribe(MODULE_NAME, props.callback);
    }
  };

  unSubscribeInit = (callback: FilterEventCallback) => {
    if (this.filterUnSubscribe) {
      this.filterUnSubscribe(MODULE_NAME, callback);
    }
  };
}
