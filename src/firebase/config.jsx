import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAAKdJGktTD-XkKvo98oIIhih8BDyhfzSk",
    authDomain: "olx-clone-308fe.firebaseapp.com",
    projectId: "olx-clone-308fe",
    storageBucket: "olx-clone-308fe.appspot.com",
    messagingSenderId: "377836197710",
    appId: "1:377836197710:web:d15a50b7cd8d89b803f01f",
    measurementId: "G-ZCD1LZYYDB"
  };
const Firebase = initializeApp(firebaseConfig);

const Firestore = getFirestore(Firebase)
const storage = getStorage(Firebase)
const auth = getAuth(Firebase);


export { auth, Firestore, storage };
