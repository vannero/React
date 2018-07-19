import firebase from 'firebase';

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAWeY8_V_miTgf-hWa8ixc7nr7LJA_h05A",
    authDomain: "bbsclient-d5623.firebaseapp.com",
    databaseURL: "https://bbsclient-d5623.firebaseio.com",
    projectId: "bbsclient-d5623",
    storageBucket: "",
    messagingSenderId: "838312548860"
  };
  var fire = firebase.initializeApp(config);

  export default fire;

