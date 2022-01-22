// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import firebase from 'firebase'
// const firebase = require('firebase/app');
// require('firebase/firestore');
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// const firebase = require('firebase/app');
// require('firebase/<PACKAGE>');
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtlqgPVu1a4PN3HeHSMNliM1E9ozIPwBU',
  authDomain: 'vue-firebase-1ac80.firebaseapp.com',
  projectId: 'vue-firebase-1ac80',
  storageBucket: 'vue-firebase-1ac80.appspot.com',
  messagingSenderId: '398638164632',
  appId: '1:398638164632:web:a0463d7381df236a937eed'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
// db.collection('user').get().then((querySnapshop) => {
//   querySnapshop.forEach((doc) => {
//     console.log(doc.id, ' => ', doc.data());
//   })
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
