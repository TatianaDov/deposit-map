import React from 'react';
import { Navigate } from 'react-router-dom';

import { RoutePropsStrict } from '../../routes/types';

import DepositsMap from './DepositsMap';

const routes: RoutePropsStrict[] = [
  {
    path: '*',
    element: <Navigate to="map" replace />,
  },
  {
    path: 'map',
    title: 'Карта объектов',
    index: true,
    element: <DepositsMap />,
  },
];

export default routes;
