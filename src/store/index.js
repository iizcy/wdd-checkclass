import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        commit("SET_LOGGED_IN", user !== null);
        if (user) {
          commit("SET_USER", {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL
          });
        } else {
          commit("SET_USER", null);
        }
        resolve();
      });
    }
  },
  modules: {},
  plugins: [vuexPersist.plugin]
});
