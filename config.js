import * as firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3seKyMwz-zmSEfw7Bv5lcNdm3je4vgw0",
    authDomain: "library-app-35fad.firebaseapp.com",
    projectId: "library-app-35fad",
    storageBucket: "library-app-35fad.appspot.com",
    messagingSenderId: "803808367645",
    appId: "1:803808367645:web:eb9df3fe4bf1466ca922f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
