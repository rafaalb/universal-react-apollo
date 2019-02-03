import Ilustrations from './components/Ilustrations';
import Ilustration from './components/Ilustration';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Ilustrations,
  },
  {
    path: '/ilustration/:id',
    name: 'ilustration',
    component: Ilustration,
  },
];

export default routes;