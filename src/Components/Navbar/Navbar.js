import React from 'react';
import './Navbar.css'; // Optional CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">CodeScope</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#hypothesis">Hypothesis</a></li>
        <li><a href="#our-work">Our Work</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
