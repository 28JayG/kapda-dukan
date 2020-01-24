import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZdxz2xWkbK7Bn34ObLXy_lU_KLbiHJbo",
  authDomain: "kapda-dukan.firebaseapp.com",
  databaseURL: "https://kapda-dukan.firebaseio.com",
  projectId: "kapda-dukan",
  storageBucket: "kapda-dukan.appspot.com",
  messagingSenderId: "704811624152",
  appId: "1:704811624152:web:3b4f26da07da7c0b1b99ad",
  measurementId: "G-Z8XHG8G3L0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error("Error creating user:" + err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
