import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from '@/components/Hello';
import Announcements from '@/components/Announcements';
import Construction from '@/components/Construction';
import Photos from '@/components/Photos';
import NotFound from '@/components/NotFound';
import Secure from '@/components/Secure';
import Auth from '@okta/okta-vue';

Vue.use(Auth, {
  issuer: 'https://dev-696620.okta.com/oauth2/default',
  // issuer: `${process.env.OKTA_URI_BASE}/oauth2/default`,
  // client_id: `${process.env.OKTA_CLIENT}`,
  client_id: '0oahqajr5iKCjYUO1356',
  redirect_uri: `${window.location.origin}/implicit/callback`,
  scope: 'openid profile email',
});
// eslint-disable-next-line
console.log('Env', process.env.NODE_ENV);

Vue.use(VueRouter);

/**
 * Routes in the application
 */
const routes = [
  { path: '/', name: 'Welcome', component: Hello },
  {
    path: '/implicit/callback',
    component: Auth.handleCallback(),
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    meta: { requiresAuth: true },
  },
  { path: '/photos', name: 'Weddding Feed', component: Photos },
  { path: '/news', name: 'Announcements', component: Announcements },
  { path: '/party', component: Construction },
  { path: '/registry', component: Construction, meta: { requiresAuth: true } },
  { path: '/songs', component: Construction },
  { path: '/venue', component: Construction },
  { path: '/faq', component: Construction },
  { path: '/rsvp', component: Construction, meta: { requiresAuth: true } },
  { path: '/404', component: NotFound },
  { path: '*', component: NotFound, redirect: '/404' },


];
/**
 * Router for the application
 */
const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
