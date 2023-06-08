import React, { useState } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login/Login";
import SignUpForm from "./components/SignUp/SignUp";
import HotelBookingPage from "./components/Home/Home";
import AdminHomePage from "./components/Admin/HomePage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleLoginClick = () => {
    setCurrentPage("login");
  };

  const handleSignupClick = () => {
    setCurrentPage("signup");
  };

  const handleRegister = () => {
    setCurrentPage("login");
  };

  const handleLogin = () => {
    setCurrentPage("home");
  };

  let content;

  if (currentPage === "home") {
    content = <HotelBookingPage />;
  } else if (currentPage === "login") {
    content = <LoginForm />;
  } else if (currentPage === "signup") {
    content = <SignUpForm onRegister={handleRegister} />;
  }

  return (
    <div>
      <Header
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      {content}
      {/* <AdminHomePage /> */}
    </div>
  );
};

export default App;
