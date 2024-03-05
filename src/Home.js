// Home.js

import React from 'react';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffc8dd', // Background color from your palette
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#cdb4db', // Primary color from your palette
  };

  const imgStyle = {
    width: '200px',
    borderRadius: '50%',
    margin: '20px auto',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#bde0fe', // Secondary color from your palette
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Your Name</h1>
      <img src="" alt="Arie David" style={imgStyle} />
      <p style={paragraphStyle}>Your brand statement or introduction</p>
      <p style={paragraphStyle}>This is my portfolio site</p>
    </div>
  );
}

export default Home;


