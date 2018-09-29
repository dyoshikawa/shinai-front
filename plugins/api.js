import axios from 'axios'
import { apiUrl } from '~/config/config'
import trace from '~/plugins/trace'

const apiWrapper = jwt => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

// しないこと
export const fetchAuthUserTasks = async (jwt, page) => {
  const api = apiWrapper(jwt)
  trace(page)
  return await api.get(`${apiUrl}/self/tasks?page=${page}`)
}

export const fetchTimelineTasks = async (jwt, page) => {
  const api = apiWrapper(jwt)
  trace(page)
  return await api.get(`${apiUrl}/tasks?page=${page}`)
}

export const fetchUserTasks = async (jwt, { page, id }) => {
  const api = apiWrapper(jwt)
  trace(`page: ${page}, id: ${id}`)
  return await api.get(`${apiUrl}/users/${id}/tasks?page=${page}`)
}

export const fetchTask = async id => {
  trace(`id: ${id}`)
  const jwt = ''
  const api = apiWrapper(jwt)
  return await api.get(`${apiUrl}/tasks/${id}`)
}

export const createTask = async (jwt, body) => {
  const api = apiWrapper(jwt)
  return await api.post(`${apiUrl}/tasks`, body)
}

export const succeedTask = async (jwt, id) => {
  const api = apiWrapper(jwt)
  return await api.put(`${apiUrl}/tasks/${id}/succeed`)
}

export const cancelSuccessfulTask = async (jwt, id) => {
  const api = apiWrapper(jwt)
  return await api.put(`${apiUrl}/tasks/${id}/cancel-successful`)
}

export const failTask = async (jwt, id) => {
  const api = apiWrapper(jwt)
  return await api.put(`${apiUrl}/tasks/${id}/fail`)
}

export const cancelFailedTask = async (jwt, id) => {
  const api = apiWrapper(jwt)
  return await api.put(`${apiUrl}/tasks/${id}/cancel-failed`)
}

// ユーザ
export const fetchUser = async id => {
  const jwt = ''
  const api = apiWrapper(jwt)
  return await api.get(`${apiUrl}/users/${id}`)
}
