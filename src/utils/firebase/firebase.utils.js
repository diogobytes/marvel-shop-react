import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyA5Al7yntpvg4GqCeSKCzgERw-wiCbhvi0",
  
    authDomain: "marvel-comics-shop-db.firebaseapp.com",
  
    projectId: "marvel-comics-shop-db",
  
    storageBucket: "marvel-comics-shop-db.appspot.com",
  
    messagingSenderId: "714492416397",
  
    appId: "1:714492416397:web:5d4914bfa81e58838f2dc4",
  
    measurementId: "G-5SE39MBWLC"
  
};
  
  
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
  
   // if user exists
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
    } catch(e) {
        console.log('error creating the user', e.message);
    }
}

   // return userDocRef
  
    return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
    
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}