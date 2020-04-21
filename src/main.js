import "@babel/polyfill";
import { auth } from "./library/firebase";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueQrcode from "@chenfengyuan/vue-qrcode";

Vue.config.productionTip = false;

Vue.component(VueQrcode.name, VueQrcode);

auth.onAuthStateChanged(user => {
  if (
    (!store.getters.user.data && user) ||
    (store.getters.user.data && !user)
  ) {
    store
      .dispatch("fetchUser", user)
      .then(() => {
        if (!user) {
          router
            .push("/")
            .then()
            .catch(() => {});
        } else {
          router
            .push("/ChooseSignin")
            .then()
            .catch(() => {});
        }
      })
      .catch();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
