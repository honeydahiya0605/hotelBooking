import React, { useState } from "react";
import "./Login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset the form
    setFormData({ email: "", password: "" });
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
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
