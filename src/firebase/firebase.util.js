import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyArdnajl2gNbxMhr_X1mJ9-CYEGS-wC4Jw",
    authDomain: "vikhyat-com-db.firebaseapp.com",
    databaseURL: "https://vikhyat-com-db.firebaseio.com",
    projectId: "vikhyat-com-db",
    storageBucket: "vikhyat-com-db.appspot.com",
    messagingSenderId: "1028255718216",
    appId: "1:1028255718216:web:404a3f44796dd512dd317d",
    measurementId: "G-30ED2KRE2V"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
      if(!userAuth) return;
      const userRef = firestore.doc(`user/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if(!snapShot.exists) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          }
          catch(error){
            console.log('error creating user',error.message);
            
          }
      }
      
      return userRef;
      
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const SignInWithGoogle  = () => auth.signInWithPopup(provider);

  export default firebase