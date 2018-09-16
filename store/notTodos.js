import { fetchUserNotTodos, createNotTodo } from '~/plugins/api'

export const state = () => ({
  list: []
})

export const actions = {
  async fetch({ commit, rootState }) {
    console.log(rootState)
    const { data } = await fetchUserNotTodos(rootState.user.jwt)
    console.log(data)
    commit('set', data)
  },
  async add({ commit, rootState }) {
    const jwt = rootState.user.jwt
    await createNotTodo(jwt)
    const { data } = await fetchUserNotTodos(jwt)
    console.log(data)
    commit('set', data)
  }
}

export const mutations = {
  set(state, notTodos) {
    console.log(notTodos)
    state.list = notTodos
  }
}
