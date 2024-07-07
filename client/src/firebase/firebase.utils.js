import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore/lite';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCZdxz2xWkbK7Bn34ObLXy_lU_KLbiHJbo',
  authDomain: 'kapda-dukan.firebaseapp.com',
  databaseURL: 'https://kapda-dukan.firebaseio.com',
  projectId: 'kapda-dukan',
  storageBucket: 'kapda-dukan.appspot.com',
  messagingSenderId: '704811624152',
  appId: '1:704811624152:web:3b4f26da07da7c0b1b99ad',
  measurementId: 'G-Z8XHG8G3L0',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, 'users', `${userAuth.uid}`);
  const userSnapShot = await getDoc(userRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error('Error creating user:' + err.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
    };
  });

  return transformedCollections.reduce((acculumator, collection) => {
    acculumator[collection.title.toLowerCase()] = collection;
    return acculumator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (userAuth) => {
      userAuth ? resolve(userAuth) : reject(new Error('User not found'));
    });
  });
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(googleProvider);
