import React from 'react';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';

import { getRoutes, routes } from '../../routes';

export default function App() {
  const routeItems = getRoutes(routes);
  return <Theme preset={presetGpnDefault}>{routeItems}</Theme>;
}
