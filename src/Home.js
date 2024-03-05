// Home.js

import React from 'react';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffd8e7', // Background colour from my palette
    minHeight: '100vh', // Container takes up full height of the viewport
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#212529', // Colour from my palette
  };

  const imgStyle = {
    width: '200px',
    borderRadius: '50%',
    margin: '20px auto',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#212529', // Colour from my palette
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Arie David</h1>
      <img src="./Assets/profilepic.png" alt="Arie David" style={imgStyle} />
      <p style={paragraphStyle}>Your brand statement or introduction</p>
      <p style={paragraphStyle}>Welcome to my portfolio site</p>
    </div>
  );
}

export default Home;


