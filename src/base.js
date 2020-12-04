import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDNp8Y7RMwU2yqhwJcJrhAYs0msh_a8xE",
  authDomain: "ma-boite-a-recettes-e5b64.firebaseapp.com",
  databaseURL: "https://ma-boite-a-recettes-e5b64.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
