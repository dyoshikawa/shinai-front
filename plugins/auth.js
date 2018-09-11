import firebase from '~/plugins/firebase'
import 'firebase/auth'

function auth() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user || false)
    })
  })
}
export default auth
