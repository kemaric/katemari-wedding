import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/Hello';
import WeddingParty from '@/components/WeddingParty';
import Announcements from '@/components/Announcements';
import Construction from '@/components/Construction';
import Photos from '@/components/Photos';
import NotFound from '@/components/NotFound';
import Secure from '@/components/Secure';
import Auth from '@okta/okta-vue';
import SaveDate from '@/components/SaveDate';
import Faq from '@/components/Faq';
import Registry from '@/components/Registry';

Vue.use(Auth, {
  issuer: 'https://dev-696620.okta.com/oauth2/default',
  client_id: '0oahqajr5iKCjYUO1356',
  redirect_uri: `${window.location.origin}/implicit/callback`,
  scope: 'openid profile email',
});

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
  { path: '/date', name: 'Save The Date', component: SaveDate },
  { path: '/party', component: WeddingParty },
  { path: '/registry', component: Registry, meta: { requiresAuth: false } },
  { path: '/songs', component: Construction },
  { path: '/venue', component: Construction },
  { path: '/faq', component: Faq },
  { path: '/rsvp', component: Construction, meta: { requiresAuth: false } },
  { path: '/404', component: NotFound },
  { path: '*', component: NotFound, redirect: '/404' },


];
/**
 * Router for the application
 */
const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes,
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
