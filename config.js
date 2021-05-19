import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBK8zjPOwHizgHBO83Y-1YtnaRXxxxjNCw",
    authDomain: "barter-45275.firebaseapp.com",
    projectId: "barter-45275",
    storageBucket: "barter-45275.appspot.com",
    messagingSenderId: "421574170716",
    appId: "1:421574170716:web:75e108a680916ba8ddae99"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()