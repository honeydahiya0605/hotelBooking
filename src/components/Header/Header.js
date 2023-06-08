import React from "react";
import classes from "./Header.module.css";

const Header = ({ onLoginClick, onSignupClick }) => {
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <h3>BookMyHotel</h3>
      </div>
      <div className={classes.buttons}>
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onSignupClick}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
