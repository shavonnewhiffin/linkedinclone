import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EventIcon from "@mui/icons-material/Event";

const Sidebar = () => {
  // Import user from the Redux store
  const user = useSelector(selectUser);
  if (!user) return null; // Return null if user is not available

  const featuredItems = [
    { Icon: BookmarkIcon, label: "Saved Items" },
    { Icon: GroupsIcon, label: "Groups" },
    { Icon: NewspaperIcon, label: "Newsletters" },
    { Icon: EventIcon, label: "Events" },
  ];

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar src={user?.photoUrl} className="sidebar__avatar">
          {user?.email?.[0].toUpperCase()}{" "}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">$2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">$2,448</p>
        </div>
      </div>

      <div className="sidebar__middle">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>

      <div className="sidebar__bottom">
        {featuredItems.map(({ Icon, label }) => (
          <div className="sidebar__featuredItem" key={label}>
          <Icon className="sidebar__featuredIcon" />
          <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
