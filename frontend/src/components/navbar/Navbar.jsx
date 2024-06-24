import React from 'react';
import './NavbarStyle.css';

const Navbar = () => {
  return (
    <div className="navbarStyle">
      <div className="topBarStyle">
        <div className="logoStyle">MVL</div>
        <div className="searchBarStyle">
          <input type="text" placeholder="Search games or users..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
