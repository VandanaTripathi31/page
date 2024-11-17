import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/Teddy.logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Teddy Daddy Logo" />
        <span>Teddy Dreams</span>
      </div>

      {/* Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/Shoppage" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Log In</Link></li>
        <li><Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link></li>
        <li><Link to="/order-tracking" onClick={() => setIsMenuOpen(false)}>Order Tracking</Link></li>
      </ul>

      {/* Search and Cart Section */}
      <div className="search-cart">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button><i className="fas fa-search"></i></button>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
