import home from '@/components/home';
import kind from '@/components/kind';
import cart from '@/components/cart';
import user from '@/components/user';

const app = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/kind',
    component: kind
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/user',
    component: user
  }
];

export default app;
