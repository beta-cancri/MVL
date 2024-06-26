import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import './LayoutStyle.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    return <div>{children}</div>;
  }

  const isLoggedIn = true; 
  const user = {
    name: 'John Doe',
    picture: 'https://via.placeholder.com/150',
  };

  return (
    <div className="layoutContainer">
      <Navbar />
      <Sidebar isLoggedIn={isLoggedIn} user={user} />
      <div className="mainContent">
        {children}
      </div>
    </div>
  );
};

export default Layout;
