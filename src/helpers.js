import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin);


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
