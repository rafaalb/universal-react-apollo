import Ilustrations from './components/Ilustrations';
import Ilustration from './components/Ilustration';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Ilustrations,
  },
  {
    path: '/ilustration/:id',
    name: 'ilustration',
    component: Ilustration,
  },
];

export default routes;