import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from 'firebase';

var config =  {
  apiKey: "AIzaSyCxIaf6Joaf3ReO1eYnMhY0IG4DDc-NwCA",
  authDomain: "vue-chatapp-ed381.firebaseapp.com",
  databaseURL: "https://vue-chatapp-ed381.firebaseio.com",
  projectId: "vue-chatapp-ed381",
  storageBucket: "vue-chatapp-ed381.appspot.com",
  messagingSenderId: "333394129790",
  appId: "1:333394129790:web:f7629434fa42549527792f"
};

firebase.initalizeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
