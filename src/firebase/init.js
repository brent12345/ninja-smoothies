 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCWNl3y2ncvIH-ezxppU6MU_ABrPcmexFM",
    authDomain: "udemy-ninja-smoothies-bf78f.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-bf78f.firebaseio.com",
    projectId: "udemy-ninja-smoothies-bf78f",
    storageBucket: "udemy-ninja-smoothies-bf78f.appspot.com",
    messagingSenderId: "114011834474"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // export firestore database
  export default firebaseApp.firestore()