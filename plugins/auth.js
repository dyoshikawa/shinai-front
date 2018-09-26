import firebase from '~/plugins/firebase'
import 'firebase/auth'

export default function auth() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user || false)
    })
  })
}

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

export function loginWithTwitter() {
  const provider = new firebase.auth.TwitterAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

export async function logout(store) {
  await firebase.auth().signOut()
  store.commit('authUser/set', false)
}
