import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCdMJN7slEMLjizHzrLnGc6ypBnlk6OdLI",
  authDomain: "ecommerce-react-redux.firebaseapp.com",
  databaseURL: "https://ecommerce-react-redux.firebaseio.com",
  projectId: "ecommerce-react-redux",
  storageBucket: "ecommerce-react-redux.appspot.com",
  messagingSenderId: "388732506960",
  appId: "1:388732506960:web:4fa71fd61b04efc3d65255",
  measurementId: "G-2C9T64L2GG"
};

export const createUserProfileDocument = async (userAuth: any, additionalData?: any) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await  userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });

    } catch(error) {
      console.log('error creating user', error.message);

    }
  }
   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;