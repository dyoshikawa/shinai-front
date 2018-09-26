import { fetchUser } from '~/plugins/api'
import trace from '~/plugins/trace'

export const state = () => ({
  avatar: '',
  name: '',
})

export const actions = {
  async fetch({ commit }, id) {
    trace('user.actions.fetch')
    const { data } = await fetchUser(id)
    commit('set', data)
  },
}

export const mutations = {
  set(state, user) {
    trace('user.mutations.set')
    trace(user)
    state.name = user.name
    state.avatar = user.avatar
  },
}
