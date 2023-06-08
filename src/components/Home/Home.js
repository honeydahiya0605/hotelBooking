import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
// import hotel2 from "../../images/hotel2.jpg";
import Header from "../Header/Header";
import HotelCard from "../UI/HotelCard";
// import HotelList from "../UI/HotelList";

const HotelBookingPage = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  // const [featuredHotels, setFeaturedHotels] = useState(DummyHotels);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [hotels, setHotels] = useState([]);
  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserName(data.name);
  //       setUserEmail(data.email);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch user information:", error);
  //     });
  // }, []);

  // const handleBookNow = async (hotel) => {
  //   try {
  //     const response = await fetch("some-api", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         hotelId: hotel.id,
  //         name: userName,
  //         email: userEmail,
  //       }),
  //     });

  //     if (response.status === 200) {
  //       console.log("Booking successful!");
  //     } else {
  //       console.log("Booking failed!");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during booking:", error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDestination("");
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          "https://hotel-app-le9o.onrender.com/api-docs/hotels"
        );
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <div className={classes["hotel-booking-page"]}>
        <header>
          <h1>Welcome to our Hotel Booking Website!</h1>
        </header>
        <>
          <section className={classes.search}>
            <h2>Find Your Perfect Hotel</h2>
            <div className={classes["searchbox"]}>
              <div className={classes["input-group mb-3"]}>
                <select
                  className={classes["form-select"]}
                  id="inputGroupSelect01"
                >
                  <option selected="">Destination</option>
                  <option value="1">Delhi</option>
                  <option value="2">Gurgaon</option>
                  <option value="3">Jaipur</option>
                </select>
              </div>

              <div className={classes["input-group mb-3"]}>
                <select
                  className={classes["form-select"]}
                  id="inputGroupSelect02"
                >
                  <option selected="">Star Rating</option>
                  <option value="1">⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
              </div>

              <div className={classes["input-group mb-3"]}>
                <select
                  className={classes["form-select"]}
                  id="inputGroupSelect03"
                >
                  <option selected="">Price Range</option>
                  <option value="1">1000-3000</option>
                  <option value="2">3000-5000</option>
                  <option value="3">5000-10000</option>
                </select>
              </div>

              <div className={classes["input-group mb-3"]}>
                <input type="date" placeholder="CheckIn Date" />
              </div>
              <button
                type="button"
                className={classes["btn btn-success"]}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </section>
          <section className={classes["featured-hotels-section"]}>
            <div>
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </section>
        </>
        <footer>
          <p>&copy; 2023 Hotel Booking Website. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HotelBookingPage;
