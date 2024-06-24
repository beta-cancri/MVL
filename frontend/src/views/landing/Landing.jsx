import React from 'react';
import { Link } from 'react-router-dom';
import './LandingStyle.css';

const Landing = () => {
  return (
    <div className="landingStyle">
      <div className="loginContainerStyle">
        <h1>Welcome to My Videogame List</h1>
        <div className="buttonsStyle">
          <Link to="/login" className="btnStyle">Login</Link>
          <Link to="/home" className="btnStyle">Continue without Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
