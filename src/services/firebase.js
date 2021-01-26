import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAwXsRDXtEL8B5qe9p07hOXWll7MDiEF0o",
  authDomain: "todo-app-f3677.firebaseapp.com",
  projectId: "todo-app-f3677",
  storageBucket: "todo-app-f3677.appspot.com",
  messagingSenderId: "20985332077",
  appId: "1:20985332077:web:46ffc77a58c4d856b7da64",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, auth, db, googleProvider };
