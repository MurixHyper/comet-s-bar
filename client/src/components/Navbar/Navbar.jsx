import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <Link to="/" className="NavItem">Home</Link>
      <div className="line"></div>
      <Link to="/about" className="NavItem">About Us</Link>
      <div className="line"></div>
      <Link to="/contact" className="NavItem">Contact Us</Link>
      <div className="line"></div>
      <Link to="/blog" className="NavItem">Blog</Link>
      <div className="line"></div>
      <Link to="/menu" className="NavItem">Menu</Link>
    </div>
  );
};

export default Navbar;
