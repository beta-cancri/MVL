import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarStyle.css';

const Sidebar = ({ isLoggedIn, user }) => {
  return (
    <div className="sidebarStyle">
      {isLoggedIn ? (
        <>
          <div className="userInfoStyle">
            <img src={user.picture} alt="User" />
            <span>{user.name}</span>
          </div>
          <Link to="/profile" className="btnStyle">Profile</Link>
          <Link to="/favorites" className="btnStyle">Favorites</Link>
          <Link to="/user-list" className="btnStyle">My List</Link>
        </>
      ) : (
        <>
          <Link to="/login" className="btnStyle">Login</Link>
          <Link to="/signup" className="btnStyle">Sign Up</Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
