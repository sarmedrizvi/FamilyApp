import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
var firebaseConfig = {
  apiKey: 'AIzaSyB9fhW-eLnzCJ_2fmbavaUcmhTCcOwzP8w',
  authDomain: 'family-app-1a180.firebaseapp.com',
  databaseURL: 'https://family-app-1a180.firebaseio.com',
  projectId: 'family-app-1a180',
  storageBucket: 'family-app-1a180.appspot.com',
  messagingSenderId: '526957022378',
  appId: '1:526957022378:web:0f987d469bce4c545194d3',
  measurementId: 'G-Y8CTG8P50K',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
