import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    testLog: () => {
      console.log('in testlog method in store')
    }
  },
  modules: {
  }
})
