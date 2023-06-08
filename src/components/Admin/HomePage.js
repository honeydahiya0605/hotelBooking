import React, { useState } from "react";
import classes from "./HomePage.module.css";
import HotelCard from "./HotelCardAdd";

const AdminHomePage = () => {
  const [hotelName, setHotelName] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelRating, setHotelRating] = useState("");
  const [hotels, setHotels] = useState([]);

  const handleHotelNameChange = (e) => {
    setHotelName(e.target.value);
  };

  const handleHotelLocationChange = (e) => {
    setHotelLocation(e.target.value);
  };

  const handleHotelRatingChange = (e) => {
    setHotelRating(e.target.value);
  };

  const handleAddHotel = () => {
    const newHotel = {
      name: hotelName,
      location: hotelLocation,
      rating: hotelRating,
    };

    fetch("api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHotel),
    })
      .then((response) => response.json())
      .then((data) => {
        // Updating the hotels list with the newly added hotel
        setHotels((prevHotels) => [...prevHotels, data]);
      })
      .catch((error) => {
        console.error("Error adding hotel:", error);
      });

    // Clear
    setHotelName("");
    setHotelLocation("");
    setHotelRating("");
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Admin Home Page</h2>

      <div className={classes.formContainer}>
        <div className={classes.inputContainer}>
          <label className={classes.label}>Hotel Name</label>
          <input
            type="text"
            value={hotelName}
            onChange={handleHotelNameChange}
            className={classes.input}
          />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>Hotel Location</label>
          <input
            type="text"
            value={hotelLocation}
            onChange={handleHotelLocationChange}
            className={classes.input}
          />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>Hotel Rating</label>
          <input
            type="text"
            value={hotelRating}
            onChange={handleHotelRatingChange}
            className={classes.input}
          />
        </div>
        <button onClick={handleAddHotel} className={classes.button}>
          Add Hotel
        </button>
      </div>

      <h3>Hotels List:</h3>
      <div className={classes.hotelsContainer}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default AdminHomePage;
