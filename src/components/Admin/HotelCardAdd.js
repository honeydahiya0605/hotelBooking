import React from "react";
import classes from "./HotelCardAdd.module.css";

const HotelCard = (props) => {
  return (
    <div className={classes.hotelCard}>
      <h4 className={classes.hotelName}>{props.name}</h4>
      <p className={classes.hotelLocation}>{props.location}</p>
      <p className={classes.hotelRating}>Rating: {props.rating}</p>
      <button className={classes.editButton}>Edit</button>
      <button className={classes.deleteButton}>Delete</button>
    </div>
  );
};

export default HotelCard;
