import {
  fetchAuthUserTasks,
  fetchTimelineTasks,
  fetchUserTasks,
  fetchTask,
  createTask,
  succeedTask,
  cancelSuccessfulTask,
  failTask,
  cancelFailedTask,
} from '~/plugins/api'
import trace from '~/plugins/trace'

export const state = () => ({
  list: [],
  totalCount: 0,
  perPage: 10,
  one: {
    id: null,
    content: '',
    user: {
      id: null,
      avatar: '',
    },
  },
})

export const getters = {
  list: state => {
    return state.list
  },
}

export const actions = {
  async fetch({ commit, rootState }, page) {
    const jwt = rootState.authUser.jwt
    const { data } = await fetchAuthUserTasks(jwt, page)
    trace(data)

    commit('set', data)
  },

  async fetchTimeline({ commit }, page) {
    const jwt = ''
    const { data } = await fetchTimelineTasks(jwt, page)
    trace(data)

    commit('set', data)
  },

  async fetchUser({ commit }, { page, id }) {
    const jwt = ''
    const { data } = await fetchUserTasks(jwt, { page: page, id: id })
    trace(data)

    commit('set', data)
  },

  async fetchOne({ commit }, id) {
    const { data } = await fetchTask(id)
    trace(data)

    commit('setOne', data)
  },

  async add({ commit, rootState }, body) {
    const jwt = rootState.authUser.jwt

    await createTask(jwt, body)

    const { data } = await fetchAuthUserTasks(jwt)
    trace(data)

    commit('set', data)
  },

  async succeed({ commit, rootState }, id) {
    const jwt = rootState.authUser.jwt

    await succeedTask(jwt, id)

    const { data } = await fetchAuthUserTasks(jwt)
    trace(data)

    commit('set', data)
  },

  async cancelSuccessful({ commit, rootState }, id) {
    const jwt = rootState.authUser.jwt

    await cancelSuccessfulTask(jwt, id)

    const { data } = await fetchAuthUserTasks(jwt)
    trace(data)

    commit('set', data)
  },

  async fail({ commit, rootState }, id) {
    const jwt = rootState.authUser.jwt

    await failTask(jwt, id)

    const { data } = await fetchAuthUserTasks(jwt)
    trace(data)

    commit('set', data)
  },

  async cancelFailed({ commit, rootState }, id) {
    const jwt = rootState.authUser.jwt

    await cancelFailedTask(jwt, id)

    const { data } = await fetchAuthUserTasks(jwt)
    trace(data)

    commit('set', data)
  },
}

export const mutations = {
  set(state, { records, total_record, limit }) {
    trace(records)
    trace(total_record)
    trace(limit)
    state.list = records
    state.totalCount = total_record
    state.perPage = limit
  },

  setOne(state, { ID, content, user }) {
    trace(
      `content: ${content}, user.ID: ${user.ID}, user.avatar: ${user.avatar}`
    )
    state.one.id = ID
    state.one.content = content
    state.one.user.id = user.ID
    state.one.user.avatar = user.avatar
  },
}
