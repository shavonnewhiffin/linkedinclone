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
import Headshot from "../assets/headshot.png"


const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="" />
        <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon}title="Jobs"/>
        <HeaderOption Icon={ChatIcon}title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon}title="Notifications"/>
        <HeaderOption avatar={Headshot} title="me" />
      </div>
    </div>
  );
};

export default Header;
