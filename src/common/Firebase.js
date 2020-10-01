import firebase from "firebase/app"
import "firebase/firestore";
//credenciales
const firebaseConfig = {
    apiKey: "AIzaSyA_U5hBvY_M5DZP78xklA60QErI3BbhEaY",
    authDomain: "xiimbalkiin.firebaseapp.com",
    databaseURL: "https://xiimbalkiin.firebaseio.com",
    projectId: "xiimbalkiin",
    storageBucket: "xiimbalkiin.appspot.com",
    messagingSenderId: "922858931409",
    appId: "1:922858931409:web:539ae3172f40331cf771f0",
    measurementId: "G-56E6G85W1Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export {db};
