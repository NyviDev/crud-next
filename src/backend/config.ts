import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCuFWTIe6PWtd-W5wUAduryrKBj7hw1f50",
    authDomain: "teste-d57a4.firebaseapp.com",
    projectId: "teste-d57a4",
  });
}

export default firebase;
