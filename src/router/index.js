import Vue from 'vue';
import VueRouter from 'vue-router';
import Books from '@/views/Books.vue';
import Viewer from '@/views/Viewer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'books',
    component: Books,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/viewer',
    name: 'viewer',
    component: Viewer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
