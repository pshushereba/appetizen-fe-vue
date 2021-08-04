import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem("token") || "",
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async login({ commit }, user) {
      await axios
        .post("https://appetizen-be.herokuapp.com/api/auth/login", user)
        .then((res) => {
          console.log(res);
          commit("setCurrentUser", res.data);
        })
        .catch((err) => console.error(err));
    },
    async register({ commit }, user) {
      await axios
        .post("https://appetizen-be.herokuapp.com/api/auth/register", user)
        .then((res) => {
          console.log(res);
          commit("setCurrentUser", res.data);
        })
        .catch((err) => console.error(err));
    },
    logout({ commit }) {
      commit("setCurrentUser", null);
    },
  }
});
