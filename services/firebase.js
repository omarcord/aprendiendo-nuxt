import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDEExpbpjMK92yqjpJazeXKwCusIo4IHjk",
    authDomain: "nuxt-cdf49.firebaseapp.com",
    databaseURL: "https://nuxt-cdf49.firebaseio.com",
    projectId: "nuxt-cdf49",
    storageBucket: "nuxt-cdf49.appspot.com",
    messagingSenderId: "776951606964"
  };
  firebase.initializeApp(config);
  export default firebase