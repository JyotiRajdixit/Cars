import firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBGbUEHcxzsBQESeIviwXF-OdZNOksnVtI",
    authDomain: "react-crud-de0bb.firebaseapp.com",
    databaseURL: "https://react-crud-de0bb-default-rtdb.firebaseio.com",
    projectId: "react-crud-de0bb",
    storageBucket: "react-crud-de0bb.appspot.com",
    messagingSenderId: "883723854493",
    appId: "1:883723854493:web:b96be09526968cd724aa74"
  };
  
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();