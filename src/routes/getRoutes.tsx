import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutePropsStrict } from './types';

function getRoutesMap(route: RoutePropsStrict[]) {
  return route.map(({ ...routeProps }) => (
    <Route key={routeProps.path} path={routeProps.path} element={routeProps.element} />
  ));
}

export default function getRoutes(routes: RoutePropsStrict[]) {
  return <Routes>{getRoutesMap(routes)}</Routes>;
}
