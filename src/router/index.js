import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from '@/components/Hello';
import Announcements from '@/components/Announcements';
import Construction from '@/components/Construction';
import Photos from '@/components/Photos';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter);

/**
 * Routes in the application
 */
const routes = [
  { path: '/', name: 'Welcome', component: Hello },
  { path: '/photos', name: 'Weddding Feed', component: Photos },
  { path: '/news', name: 'Announcements', component: Announcements },
  { path: '/party', component: Construction },
  { path: '/registry', component: Construction },
  { path: '/songs', component: Construction },
  { path: '/venue', component: Construction },
  { path: '/faq', component: Construction },
  { path: '/rsvp', component: Construction },
  { path: '/404', component: NotFound },
  { path: '*', component: NotFound, redirect: '/404' },


];
/**
 * Router for the application
 */
export default new VueRouter({
  mode: 'history',
  routes,
});
