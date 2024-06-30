// Navbar.js
import React from 'react';
import './navbarcss.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>
    </nav>
  );
}

export default Navbar;
