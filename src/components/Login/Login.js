import React, { useState } from "react";
import classes from "./Login.module.css";
import HotelBookingPage from "../Home/Home";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Email:", email);
      console.log("Password:", password);
      // Reset the form
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
    }
  };

  if (isLoggedIn) {
    return <HotelBookingPage />;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2 className={classes.heading}>Login</h2>
      <div className={classes.inputContainer}>
        <label className={classes.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          className={classes.input}
        />
        {emailError && <span className={classes.error}>{emailError}</span>}
      </div>
      <div className={classes.inputContainer}>
        <label className={classes.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          className={classes.input}
        />
        {passwordError && (
          <span className={classes.error}>{passwordError}</span>
        )}
      </div>
      <button type="submit" className={classes.button}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
