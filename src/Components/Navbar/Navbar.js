import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css'; // Optional CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use Link for navigation */}
        <Link to="/">CodeScope</Link>
      </div>
      <ul className="navbar-links">
        {/* Use Link for navigation */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/our-work">Our Work</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
