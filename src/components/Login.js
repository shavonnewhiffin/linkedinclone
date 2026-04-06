import React, { useState } from 'react';
import './Login.css';
import LinkedInLong from '../assets/LinkedInLong.png';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../features/users/userSlice';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    // Allows us to store user in Redux store
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
          return alert("Please enter a full name");
        }
    
        // User Registration with Firebase
        createUserWithEmailAndPassword(auth, email, password)
          .then((userAuth) => {
            return updateProfile(userAuth.user, {
              displayName: name,
              photoURL: profilePic,
            }).then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoUrl: profilePic,
                })
              );
            });
          })
          .catch((error) => alert(error.message));
      };

    //   User Login with Firebase
    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid, 
                displayName: userAuth.user.displayName, 
                profileUrl: userAuth.user.profileURL,
            }))
        }).catch(error => alert(error));
    };

  return (
    <div className="login">
      <img src={LinkedInLong} alt="Linkedin Logo" />

    <form onSubmit={loginToApp}>
        <input type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Full Name(required if registering)" />

        <input type="text" 
        placeholder ="Profile pic URL (optional)"
        value={profilePic}
        onChange={e => setProfilePic(e.target.value)}/>

        <input type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder = "Email"/>

        <input type="password"
        value={password}
        placeholder ="Password"
        onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Sign In</button>
    </form>

    <p>Not a member? 
        <span className="login__register" onClick={register}> Register First</span>
    </p>
    </div>
  );
};

export default Login;