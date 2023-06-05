import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/#" className="logo">
          Hotel Booking
        </Link>
        <div className="nav-links">
          <Link to="/#" className="nav-link">
            Hotels
          </Link>
          <Link to="/#" className="nav-link">
            Destinations
          </Link>
          <Link to="/#" className="nav-link">
            Contact
          </Link>
        </div>

        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
