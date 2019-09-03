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
import SongRequest from '@/components/SongRequest';
import Faq from '@/components/Faq';
import Registry from '@/components/Registry';
// import Navigation from '@/components/Navigation';

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
  { path: '/songs', component: SongRequest },
  { path: '/registry', component: Registry, meta: { requiresAuth: false } },
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
  // component: Navigation,
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
