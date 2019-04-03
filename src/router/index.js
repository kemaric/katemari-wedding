import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from '@/components/Hello';
import Announcements from '@/components/Announcements';
import Construction from '@/components/Construction';
import Photos from '@/components/Photos';

Vue.use(VueRouter);

/**
 * Routes in the application
 */
const routes = [
  { path: '/', name: 'Welcome', component: Hello },
  { path: '/photos', name: 'Weddding Feed', component: Photos },
  { path: '/news', name: 'Announcements', component: Announcements },
  { path: '*', component: Construction },
  // { path: '/asterisk/*', component: Construction },


];
/**
 * Router for the application
 */
export default new VueRouter({
  routes,
});
