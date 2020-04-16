import "@babel/polyfill";
import firebase from "firebase";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyAXt29hYIKWqS5Q9Gh4D9nd6YP4NZitknI",
  authDomain: "wdd-classattend.firebaseapp.com",
  databaseURL: "https://wdd-classattend.firebaseio.com",
  projectId: "wdd-classattend",
  storageBucket: "wdd-classattend.appspot.com",
  messagingSenderId: "326742755496"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
