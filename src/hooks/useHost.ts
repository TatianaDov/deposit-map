import { useEffect } from 'react';

import { rootStore } from '../store';

type UseHostProps = {
  host: HostStore;
  mount: (filterBody: FilterBody) => void;
  hostOption?: HostOption;
  unmount?: () => void;
};

const useHost = (props: UseHostProps) => {
  const { host, mount, unmount, hostOption } = props;
  rootStore.host.init(host);

  useEffect(() => {
    rootStore.host.subscribeInit({
      callback: mount,
      hostOption,
    });
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export { useHost };
