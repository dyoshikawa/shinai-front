import auth from '~/plugins/auth'

export const state = () => ({
  isLogin: false
})

export const actions = {
  async fetch({ commit }) {
    commit('set', await auth())
  }
}

export const mutations = {
  set(state, user) {
    if (!user) {
      state.isLogin = false
    } else {
      state.isLogin = true
    }
  }
}
