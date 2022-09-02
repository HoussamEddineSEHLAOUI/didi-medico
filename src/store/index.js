import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: null,
      token: null
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
      console.log('inside tooooken ')
      console.log(token)
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
