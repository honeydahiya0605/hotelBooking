import React, { useState } from "react";
import "./SignUp.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {};

    if (!formData.name) {
      updatedErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      updatedErrors.email = "Email is required.";
      isValid = false;
    }

    if (!formData.password) {
      updatedErrors.password = "Password is required.";
      isValid = false;
    }

    if (!formData.otp) {
      updatedErrors.otp = "OTP is required.";
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const sendOTP = () => {
    console.log("Sending OTP via SMS or email...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const sendOTP = () => {
        const apiUrl = "https://hotelbookings.com/send-otp";
        fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            phoneNumber: formData.phoneNumber,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("OTP sent successfully!");
          })
          .catch((error) => {
            console.error("Error sending OTP:", error);
          });
      };

      sendOTP();

      // Reset the form
      setFormData({ name: "", email: "", password: "", otp: "" });
      setErrors({ name: "", email: "", password: "", otp: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label>OTP</label>
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
          required
        />
        {errors.otp && <span className="error">{errors.otp}</span>}
      </div>
      <button type="button" onClick={sendOTP}>
        Send OTP
      </button>
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUpForm;
