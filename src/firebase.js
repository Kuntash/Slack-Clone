import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBYnXXNyLruxiKLS2FUsSzOG3R68DUGCag',
  authDomain: 'slack-clone-kt.firebaseapp.com',
  projectId: 'slack-clone-kt',
  storageBucket: 'slack-clone-kt.appspot.com',
  messagingSenderId: '826784211953',
  appId: '1:826784211953:web:42e6f18e48fe8c7ec89a50',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
