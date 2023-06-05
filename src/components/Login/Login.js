import React, { useState } from "react";
import "./Login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {};

    if (!formData.email) {
      updatedErrors.email = "Email is required.";
      isValid = false;
    }

    if (!formData.password) {
      updatedErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      // Reset the form
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="heading">Login</h2>
      <div className="inputContainer">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="inputContainer">
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="input"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
