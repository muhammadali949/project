// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBlX45ftceOs1nhPY_fiuwqfH_ktQ26ymo",
    authDomain: "fypmobie-zone.firebaseapp.com",
    projectId: "fypmobie-zone",
    storageBucket: "fypmobie-zone.appspot.com",
    messagingSenderId: "1065809192924",
    appId: "1:1065809192924:web:8ac9bf86698ca402049119",
    measurementId: "G-XYZXN48897"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider;
  const storage = firebase.storage();
  export {auth,provider,storage};
  export default db;