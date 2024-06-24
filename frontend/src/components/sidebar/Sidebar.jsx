import React from 'react';
import { useSelector } from 'react-redux';
import './SidebarStyle.css';

const Sidebar = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="sidebarStyle">
      <img src={user.picture || 'default-profile.png'} alt="profile" className="profilePic" />
      <h3>{user.name || 'John Doe'}</h3>
      <button>Profile</button>
      <button>Favorites</button>
      <button>My List</button>
    </div>
  );
};

export default Sidebar;
