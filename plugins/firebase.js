import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCgUtFrG_C1SEDL7MMYcg9bmKS-MC3KCsg',
    authDomain: 'shinai-list-development.firebaseapp.com',
    databaseURL: 'https://shinai-list-development.firebaseio.com',
    projectId: 'shinai-list-development',
    storageBucket: 'shinai-list-development.appspot.com',
    messagingSenderId: '414351129278'
  })
}

export default firebase
