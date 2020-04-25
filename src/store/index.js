import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '游客',
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName
    },
    logout(state) {
      state.userName = '游客'
    }
  },
  actions: {
  },
  modules: {
  }
})
