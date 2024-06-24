import React from 'react';

const TestComponent = () => {
  console.log('Environment Variables:', {
    REACT_APP_URL: process.env.REACT_APP_URL,
    REACT_APP_DB_KEY: process.env.REACT_APP_DB_KEY
  });

  return (
    <div>
      <h1>Environment Variables Test</h1>
      <p>URL: {process.env.REACT_APP_URL}</p>
      <p>DB Key: {process.env.REACT_APP_DB_KEY}</p>
    </div>
  );
};

export default TestComponent;
