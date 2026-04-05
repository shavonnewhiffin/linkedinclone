import React, { useState } from 'react';
import './Login.css';
import LinkedIn from '../assets/linkedin.png';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/users/userSlice';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    // Allows us to store user in Redux
    const dispatch = useDispatch();

    const register = () => {
    if(!name) {
        return alert("Please enter a full name")
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic,
        })
        .then(() => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
            }))
        })
    }).catch(error => alert(error.message));
    };

    const loginToApp = (e) => {
        e.preventDefault();
    };
  return (
    <div className="login">
      <img src={LinkedIn} alt="Linkedin Logo" />

    <form onSubmit={loginToApp}>
        <input type="text"
        value="name"
        onChange={e => setName(e.target.value)}
        placeholder="Full Name(required if registering)" />

        <input type="text" 
        placeholder ="Profile pic URL (optional)"
        value="profilePic"
        onChange={e => setProfilePic(e.target.value)}/>

        <input type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder = "Email"/>

        <input type="text"
        value="password"
        placeholder ="Password"
        type ="password"
        onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Sign In</button>
    </form>

    <p>Not a member? 
        <span className="login__register" onClick={register}> Register Now</span>
    </p>
    </div>
  );
};

export default Login;