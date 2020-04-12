import Vue from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAXt29hYIKWqS5Q9Gh4D9nd6YP4NZitknI",
  authDomain: "wdd-classattend.firebaseapp.com",
  databaseURL: "https://wdd-classattend.firebaseio.com",
  projectId: "wdd-classattend",
  storageBucket: "wdd-classattend.appspot.com",
  messagingSenderId: "326742755496",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
