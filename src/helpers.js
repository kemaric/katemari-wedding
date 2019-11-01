import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import moment from 'moment';


Vue.use(firestorePlugin);
Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm A');
  }
  return value;
});
Vue.filter('formatDateTime', (value) => {
  if (value != null) {
    return moment(String(value)).format('hh:mm A');
  }
  return 'TBD';
});
export const myBoi = 'This is a test of an export.';

function firebaseDatabaseInstance() {
  let instance;
  function init() {
    firebase.initializeApp({
      projectId: 'katemariwedding-134ce',
      databaseURL: 'https://katemariwedding-134ce.firebaseio.com',
    });
    return firebase;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
}
export const FDBC = firebaseDatabaseInstance();

export const fbDBConnection = FDBC.getInstance();
