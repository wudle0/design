import { RouteRecordRaw } from 'vue-router';

import Overview from '@/views/publishing-archive/Overview.vue';

export const ArchiveOverviewRoutes: Array<RouteRecordRaw> = [
  {
    path: '/archive/overview',
    name: 'archive-overview',
    component: Overview,
    meta: {
      title: 'Overview',
    },
    children: [],
  },
];
