import React from 'react';

import { MainHeader, NotFound } from '../pages';

import { RoutePropsStrict } from './types';

const routes: RoutePropsStrict[] = [
  {
    path: '/*',
    element: <MainHeader />,
    title: 'MainHeader',
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export { routes };
