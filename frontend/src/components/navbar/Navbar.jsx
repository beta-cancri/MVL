import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavbarStyle.css';

const Navbar = ({ className }) => {
  const user = useSelector(state => state.user);

  return (
    <div className={`navbar-container ${className}`}>
      <div className="navbar-content">
        <Link to="/home" className="navbar-logo">My App</Link>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="navbar-search-input" />
          <button className="navbar-search-button">Search</button>
        </div>
        <div className="navbar-right">
          <img src={user.picture || 'default-profile.png'} alt="profile" className="navbar-profile-pic" />
          <span className="navbar-username">{user.name || 'John Doe'}</span>
          <Link to="/my-list" className="navbar-button">Videogame List</Link>
          <Link to="/favorites" className="navbar-button">Favorites</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
