// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from "firebase";
// const firebase = require('firebase/app');
// require('firebase/firestore');
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";


Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH9RTm9xL-jvk1gHtz9J5zIKoMYRdfzhg",
  authDomain: "test-2577a.firebaseapp.com",
  projectId: "test-2577a",
  storageBucket: "test-2577a.appspot.com",
  messagingSenderId: "210830439691",
  appId: "1:210830439691:web:f006a2fadc2ae1fffa1e0e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

db.collection("user").get().then((querySnapshop) => {
  querySnapshop.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  })
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
