import React from 'react';
import './NavbarStyle.css';

const Navbar = () => {
  return (
    <div className="navbarStyle">
      <div className="navbarLeft">
        <h1>MVL</h1>
      </div>
      <div className="navbarRight">
        <input type="text" placeholder="Search games or users..." />
        <button className="buttonSearch">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
