const firebaseConfig = {
    apiKey: "AIzaSyAXt29hYIKWqS5Q9Gh4D9nd6YP4NZitknI",
    authDomain: "wdd-classattend.firebaseapp.com",
    databaseURL: "https://wdd-classattend.firebaseio.com",
    projectId: "wdd-classattend",
    storageBucket: "wdd-classattend.appspot.com",
    messagingSenderId: "326742755496",
    appId: "1:326742755496:web:8e5c3afb37fdc5ba541a9d",
    measurementId: "G-4QDR2GB9FE"
  };

firebase.initalizeApp(firebaseConfig)
const firestore = firebase.firestore() //Create a connection to Firestore

firestore.collection("Data").doc("student").set({
    studentID: 60000000,
    studentName: "Test Tester"
}) //Overwrite data if existed

firestore.collection("Data").doc("teacher").update({
    teacherID: 1
})

//firestore.collection("data").doc("student").get() //Get document's data

// firestore.collection("data").doc("student").onSnapshot(function(docs)) {
//     console.log(docs.data())
// }
// firestore.collection("data").doc("student").onSnapshot(function()) {
//     console.log(docs.data())
// }