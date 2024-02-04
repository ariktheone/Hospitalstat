import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAVsq3UNKiTsAc5pk_FuNOiMUosX0tO9hk",
    authDomain: "hstat-c6a7e.firebaseapp.com",
    projectId: "hstat-c6a7e",
    storageBucket: "hstat-c6a7e.appspot.com",
    messagingSenderId: "250712608478",
    appId: "1:250712608478:web:0b63d757bf4b09c909fc4f"
  };

export const app=initializeApp(firebaseConfig);