import Vue from 'vue'
import Vuex from 'vuex'
import overrideLog from '@/override-log'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logs: [''],
    logging: false,
    originalConsoleLog: console.log
  },
  mutations: {
    appendLog: (state, log) => state.logs.push(log),
    enableLogging(state) {
      overrideLog(this)
      state.logging = true
      console.log('Logging ENABLED!')
    },
    disableLogging: (state) => {
      console.log = state.originalConsoleLog
      state.logging = false
      console.log("Logging DISABLED!");
    }
  },
  actions: {
    testLog: () => {
      console.log('in testLog method in store')
    },
    appendLog: ({ commit }, opts) => {
      commit("appendLog", opts.log)
    },
    toggleLogging: ({ commit, state }) => {
      state.logging ? commit("disableLogging") : commit("enableLogging");
    },
  },
  modules: {
  }
})
