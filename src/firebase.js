import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBORjFYLy33OYlVFNhnJQyRnR7Q9FZJA-I",
  authDomain: "foodblog-5dc5f.firebaseapp.com",
  projectId: "foodblog-5dc5f",
  storageBucket: "foodblog-5dc5f.appspot.com",
  messagingSenderId: "822400633811",
  appId: "1:822400633811:web:b578d8458f2d8b3f2a7d26"
};
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export function signup(email,password){
    return createUserWithEmailAndPassword(auth, email, password);
  }
  