import { createRouter, createWebHashHistory } from 'vue-router';

import NotFound from '../views/NotFound.vue';

import { PublishingArchiveRoutes } from './publishing-archive';

const routes = [
  {
    path: '/',
    redirect: '/archive/overview',
  },
  ...PublishingArchiveRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      layout: 'not-found',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
