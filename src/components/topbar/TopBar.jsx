import React, { useImperativeHandle } from 'react';
import { useState } from "react";
import './TopBar.css';
import { Link, useMatch, useResolvePath } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';



export default function TopBar() {




  return (
  
  <>
    <div className="topbar-container">
        <div className="topbar-left">
          <Link to="home" className="logo">DredditV</Link>
        </div>
        <div className="topbar-center">

       <div className="searchbar">
            <SearchIcon className="search-icon" />
            <input  placeholder="Search DredditV" className="search-input" />
          </div>


        </div>
        <div className="topbar-right">
          <div className="topbar-links">
            <nav>
            <ul>
              <Link to="/home">Home</Link>
           
            <Link to="/login">Login</Link>
            </ul>
            </nav>
            
          </div>
          <div className="topbar-icons">
       
            {/*<div className="topbar-icon">
              <PersonIcon />
              <span className="icon-bar">
                1
              </span>
            </div>
            <div className="topbar-icon">
              <ChatIcon />
              <span className="icon-bar">
                5
              </span>
  </div>*/}
            <div className="topbar-icon">
              <CircleNotificationsIcon />
              <span className="icon-bar">
                9
              </span>
            </div>
          </div>
          <img src={require("../../assets/person/person3.jpeg")} alt="profile image"  className="topbar-img" />
        </div>
    </div>



    </>
  );
};




function CustomerLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
      <li className={path === to ? 'active' : ''}>
          <Link to={to} {...props}></Link>
      </li>
  );
}