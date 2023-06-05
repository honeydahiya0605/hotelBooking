import React from "react";
import "./Home.css";
import hotel2 from "../../images/hotel2.jpg";

const HotelBookingPage = () => {
  const featuredHotels = [
    {
      id: 1,
      name: "ITC-Rajputana",
      image: hotel2,
      description: "Near jaipur railway station",
      amenities: ["free cancellation", " ,breakfast included"],
    },
    {
      id: 2,
      name: "Nirbana Palace",
      image: hotel2,
      description: "Description of Hotel 2",
      amenities: ["free cancellation", " ,breakfast included"],
    },
    {
      id: 3,
      name: "Hotel Raddison",
      image: hotel2,
      description: "Description of Hotel 3",
      amenities: ["free cancellation", " ,breakfast included"],
    },
    {
      id: 4,
      name: "Hyatt Regency",
      image: hotel2,
      description: "Description of Hotel 4",
      amenities: ["free cancellation", " ,breakfast included"],
    },
    {
      id: 5,
      name: "The Leela",
      image: hotel2,
      description: "Description of Hotel 5",
      amenities: ["free cancellation", " ,breakfast included"],
    },
  ];

  return (
    <div className="hotel-booking-page">
      <header>
        <h1>Welcome to our Hotel Booking Website!</h1>
      </header>
      <main>
        <section className="search">
          <h2>Find Your Perfect Hotel</h2>
          <form className="search-form">
            <input type="text" placeholder="Enter a destination" />
            <input type="date" placeholder="Check-in" />
            <input type="date" placeholder="Check-out" />
            <button type="submit">Search</button>
          </form>
        </section>
        <section className="featured-hotels-section">
          <h2>Featured Hotels</h2>
          <div className="hotel-list">
            <div className="hotel-list">
              {featuredHotels.map((hotel) => (
                <div className="hotel-card" key={hotel.id}>
                  <img src={hotel.image} alt={hotel.name} />
                  <h3>{hotel.name}</h3>
                  <p>{hotel.description}</p>
                  <p>{hotel.amenities}</p>
                  <button>Book Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Hotel Booking Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HotelBookingPage;
