import MapModule from './map-module/MapModule';
import Meteo from './meteo-module/components/Meteo';

const remoteName = 'infra';

const routeMap: RouteMapItem[] = [
  {
    section: 'deviations',
    path: '/tmpl-meteo/*',
    title: 'Meteo-demo',
    Component: Meteo,
    remoteName: remoteName,
  },
  {
    section: 'deviations',
    path: '/infra/*',
    title: 'Инфраструктурные объекты',
    Component: MapModule,
    remoteName: remoteName,
  },
];

export default routeMap;
