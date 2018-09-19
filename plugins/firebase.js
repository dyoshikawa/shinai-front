import firebase from 'firebase/app'
import { firebaseConfig } from '~/config/config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
