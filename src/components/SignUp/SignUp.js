import React, { useState } from "react";
import classes from "./SignUp.module.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setMobileError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const validateName = () => {
    if (!name) {
      setNameError("Name is required.");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format.");
      return false;
    }

    return true;
  };

  const validateMobile = () => {
    if (!mobile) {
      setMobileError("Mobile is required.");
      return false;
    }

    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
      setMobileError("Invalid mobile format.");
      return false;
    }

    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required.");
      return false;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }

    // const specialCharsPattern = /[!@#$%^&*(),.?":{}|<>]/;
    // if (!specialCharsPattern.test(password)) {
    //   setPasswordError("Password must contain at least one special character.");
    //   return false;
    // }

    // return true;
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required.");
      return false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMobileValid = validateMobile();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (
      isNameValid &&
      isEmailValid &&
      isMobileValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      try {
        const response = await fetch(
          "https://hotel-app-le9o.onrender.com/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              mobile,
              password,
            }),
          }
        );
        const data = await response.json();
        console.log(data);

        // Reset the form
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
        setConfirmPassword("");
        setNameError("");
        setEmailError("");
        setMobileError("");
        setPasswordError("");
        setConfirmPasswordError("");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2 className={classes.heading}>Sign Up</h2>
      <div className={classes.inputContainer}>
        <label className={classes.label}>Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          required
          className={classes.input}
        />
        {nameError && <span className={classes.error}>{nameError}</span>}
      </div>
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
        <label className={classes.label}>Mobile</label>
        <input
          type="tel"
          value={mobile}
          onChange={handleMobileChange}
          required
          className={classes.input}
        />
        {mobileError && <span className={classes.error}>{mobileError}</span>}
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
      <div className={classes.inputContainer}>
        <label className={classes.label}>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          className={classes.input}
        />
        {confirmPasswordError && (
          <span className={classes.error}>{confirmPasswordError}</span>
        )}
      </div>
      <button type="submit" className={classes.button}>
        Register
      </button>
    </form>
  );
};

export default SignUpForm;
