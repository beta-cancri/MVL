import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './LandingStyle.css';

const Landing = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/login', { username, password });
      // Handle successful login, e.g., save user data, redirect to profile
      console.log('Login successful:', response.data);
      // Redirect to the profile page
      history.push('/profile');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="landingStyle">
      <div className="loginContainerStyle">
        <h1>Welcome to My Videogame List</h1>
        <div className="inputContainerStyle">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputStyle"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputStyle"
          />
          <button onClick={handleLogin} className="btnStyle">Login</button>
        </div>
        <div className="buttonsStyle">
          <button onClick={() => history.push('/home')} className="btnStyle">Continue without Login</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
