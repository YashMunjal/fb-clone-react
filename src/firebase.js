import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAO1pR9gMQjRZpGzsWHecgJNiWcJJRuQ_Y",
    authDomain: "fb-clone-ba326.firebaseapp.com",
    databaseURL: "https://fb-clone-ba326.firebaseio.com",
    projectId: "fb-clone-ba326",
    storageBucket: "fb-clone-ba326.appspot.com",
    messagingSenderId: "18464311358",
    appId: "1:18464311358:web:2f7b0ab907617ab9e1a96f",
    measurementId: "G-7FMZ78G5RG"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider}

  export default db;