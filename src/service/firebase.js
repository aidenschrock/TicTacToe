import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDlNP5waLPJPOi3VoApxKchowYVr8E6W20",
  authDomain: "chat-app-6beef.firebaseapp.com",
  databaseURL: "https://chat-app-6beef.firebaseio.com",
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();
  