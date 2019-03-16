import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
  },
  mutations: {
    setIsAdmin (state) {
      if (localStorage.getItem('isAuth') === 'no') {
        localStorage.setItem('isAuth', 'yes');
      }
      else {
        localStorage.setItem('isAuth', 'no');
      }
      state.isAdmin = !state.isAdmin
    }
  },
  actions: {

  }
})
