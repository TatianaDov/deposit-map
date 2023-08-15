import React from 'react';
import { Navigate } from 'react-router-dom';

import { RoutePropsStrict } from '../../routes/types';

import MeteoTabFirst from './components/MeteoTabFirst';
import MeteoTabSecond from './components/MeteoTabSecond';

const routes: RoutePropsStrict[] = [
  {
    path: '*',
    element: <Navigate to="first" replace />,
  },
  {
    path: 'first',
    title: 'Temperature',
    element: <MeteoTabFirst />,
  },
  {
    path: 'second',
    title: 'Second',
    element: <MeteoTabSecond />,
  },
];

export default routes;
