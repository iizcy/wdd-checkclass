import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXt29hYIKWqS5Q9Gh4D9nd6YP4NZitknI",
  authDomain: "wdd-classattend.firebaseapp.com",
  databaseURL: "https://wdd-classattend.firebaseio.com",
  projectId: "wdd-classattend",
  storageBucket: "wdd-classattend.appspot.com",
  messagingSenderId: "326742755496",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth, firebase };
