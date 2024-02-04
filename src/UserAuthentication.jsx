// UserAuthentication.js
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import './UserAuthentication.css'; // Include the CSS file

const auth = getAuth(app);

export default function UserAuthentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser]=useState(null);
  useEffect(()=>{onAuthStateChanged(auth, (user)=>{
    if(user){
        setUser(user);
    }else{
        setUser(null);
    }
  }
  )}, []);
  

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => { console.log(value) })
      .catch((err) => { console.log(err) });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => { console.log(value) })
      .catch((err) => { console.log(err) });
  };

  return (
    <div className="authentication-container">
      <div className="signUpDiv">
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleInputChange} />
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleInputChange} />
        <button onClick={signUp}>Signup</button>
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
}
