import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: "",
      email: "",
      department: "",
      isAdmin: "",
      id: "",
    },
    token: "",
  },
  mutations: {
    LOGIN(state, data) {
      state.user.username = data.user.username;
      state.user.email = data.user.email;
      state.user.department = data.user.department;
      state.user.isAdmin = data.user.isAdmin;
      state.token = data.token;
      state.user.id = data.user.id;
      
    },
    LOGOUT(state) {
      state.token = "";
      state.user.username = "";
      state.user.isAdmin = "";
    },
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getAdmin: (state) => state.isAdmin,
    getPost: (state) => state.post,
  },
  actions: {},
  modules: {},
});
