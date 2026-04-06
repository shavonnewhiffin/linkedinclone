import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { selectUser } from './features/users/userSlice';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/users/userSlice';
import Widget from './components/Widget';

function App() {
  // Importing user from Redux
const user = useSelector(selectUser)
const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged(userAuth => {
    if(userAuth) {
    dispatch(login({
      email: userAuth.email,
      uid: userAuth.uid,
      displayName: userAuth.displayName,
      photoUrl: userAuth.photoURL,
    }))
  } else {
    dispatch(logout());
  }})
}, [dispatch])

  return (
    <div className="app">
<Header />
      <div className="row">
{!user ? <Login /> : (
  <div className="app__body">
 <Sidebar />
<Feed />
<Widget />
</div>
)}
</div>
    </div>
  );
}

export default App;
