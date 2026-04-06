import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../assets/logo.png';
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logout, selectUser } from "../features/users/userSlice";
import { signOut } from "firebase/auth";  


const Header = () => {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  // Dispatch logout action and log out of firebase

  const logoutOfApp = () => {
    signOut(auth);
    dispatch(logout())
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="" />
        <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="I'm looking for..." />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon}title="Jobs"/>
        <HeaderOption Icon={ChatIcon}title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon}title="Notifications"/>
        {user && <HeaderOption avatar={true} title="Me" 
        onClick={logoutOfApp} />}
      </div>
    </div>
  );
};

export default Header;
