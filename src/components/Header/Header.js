import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic with username and password
    console.log("Logged in:", username, password);
    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Hotel Booking
        </Link>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="login">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
