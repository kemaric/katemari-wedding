// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App';
import router from './router';

Vue.use(firestorePlugin);
firebase.initializeApp({
  projectId: 'katemariwedding-134ce',
  databaseURL: 'https://katemariwedding-134ce.firebaseio.com',
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

export const db = firebase.firestore();
export const myBoi = 'im here to remove a warning';
