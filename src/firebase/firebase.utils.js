import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyAwjZ5ZyRY6EM9pKShjawJA4kFsKoPEoaY",
   authDomain: "crwn-fire-db.firebaseapp.com",
   projectId: "crwn-fire-db",
   storageBucket: "crwn-fire-db.appspot.com",
   messagingSenderId: "1000173084042",
   appId: "1:1000173084042:web:ac0d12578c86835ef57c73",
   measurementId: "G-X9Z1HEJM1B",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log("error creating user", error.message);
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
