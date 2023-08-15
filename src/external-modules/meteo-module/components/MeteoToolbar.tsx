import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Item } from '@consta/uikit/__internal__/src/components/Header/Menu/HeaderMenu';
import { Button } from '@consta/uikit/Button';
import { HeaderMenu, HeaderModule } from '@consta/uikit/Header';
import { IconDinosaur } from '@consta/uikit/IconDinosaur';

import { routeInclude } from '../../../routes';
import { rootStore } from '../../../store';

const MeteoToolbar = () => {
  const { inc } = rootStore.meteo;
  const navigate = useNavigate();
  const location = useLocation();
  const [stateR, setStateR] = useState<string>('');

  const itemMenu: Item[] = [
    {
      label: 'Temperature',
      onClick: () => navigate('first'),
      active: routeInclude(location.pathname, 'first'),
    },
    {
      label: 'Second',
      onClick: () => navigate('second'),
      active: routeInclude(location.pathname, 'second'),
    },
  ];

  const handlerBtn = () => {
    setStateR(state => state + '-r');
    inc();
  };

  return (
    <>
      <HeaderModule indent="l">
        <HeaderMenu items={itemMenu} />
      </HeaderModule>
      <HeaderModule indent="l">
        <Button view="ghost" label={stateR} iconLeft={IconDinosaur} onClick={handlerBtn} />
      </HeaderModule>
    </>
  );
};

export default MeteoToolbar;
