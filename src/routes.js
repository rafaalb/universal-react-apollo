import loadable from '@loadable/component';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: loadable(() => import('./components/Ilustrations')),
  },
  {
    path: '/ilustration',
    name: 'ilustration',
    component: loadable(() => import('./components/Ilustration'))
  },
];

export default routes;