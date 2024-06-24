import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../redux/actions/userActions';
import './ProfileStyle.css';

const Profile = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      dispatch(deleteUser(user.id));
    }
  };

  return (
    <div className="profileStyle">
      <div className="profileHeaderStyle">
        <img src={user.picture} alt="User" className="profilePicStyle" />
        <h1>{user.name}</h1>
      </div>
      <div className="profileStatsStyle">
        <p>Email: {user.email}</p>
        <p>Favorites: {user.favorites.length}</p>
        <p>Games in list: {user.gameList.length}</p>
        <button onClick={handleDelete} className="deleteBtnStyle">Delete Account</button>
      </div>
    </div>
  );
};

export default Profile;
