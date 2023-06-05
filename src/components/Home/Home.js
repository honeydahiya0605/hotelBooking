import React, { useState } from "react";
import "./Home.css";
import hotel2 from "../../images/hotel2.jpg";

const HotelBookingPage = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const featuredHotels = [
    {
      id: 1,
      name: "ITC-Rajputana",
      image: hotel2,
      description: "Near jaipur railway station",
      amenities: ["free cancellation", " ,breakfast included"],
      price: 5000,
    },
    {
      id: 2,
      name: "Nirbana Palace",
      image: hotel2,
      description: "Description of Hotel 2",
      amenities: ["free cancellation", " ,breakfast included"],
      price: 4000,
    },
    {
      id: 3,
      name: "Hotel Raddison",
      image: hotel2,
      description: "Description of Hotel 3",
      amenities: ["free cancellation", " ,breakfast included"],
      price: 4000,
    },
    {
      id: 4,
      name: "Hyatt Regency",
      image: hotel2,
      description: "Description of Hotel 4",
      amenities: ["free cancellation", " ,breakfast included"],
      price: 7000,
    },
    {
      id: 5,
      name: "The Leela",
      image: hotel2,
      description: "Description of Hotel 5",
      amenities: ["free cancellation", " ,breakfast included"],
      price: 6000,
    },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = featuredHotels.filter((hotel) => {
      const isDestinationMatch = hotel.name
        .toLowerCase()
        .includes(destination.toLowerCase());
      const isAvailable = checkInDate && checkOutDate;

      return isDestinationMatch && isAvailable;
    });

    setFilteredHotels(filtered);
  };

  const handleBookNow = (hotel) => {
    console.log("Booking hotel:", hotel);
  };
  return (
    <div className="hotel-booking-page">
      <header>
        <h1>Welcome to our Hotel Booking Website!</h1>
      </header>
      <main>
        <main>
          <section className="search">
            <h2>Find Your Perfect Hotel</h2>
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter a destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <input
                type="date"
                placeholder="Check-in"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
              <input
                type="date"
                placeholder="Check-out"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </section>

          <section className="featured-hotels-section">
            <div className="hotel-list">
              {filteredHotels.map((hotel) => (
                <div className="hotel-card" key={hotel.id}>
                  <img src={hotel.image} alt={hotel.name} />
                  <h3>{hotel.name}</h3>
                  <p>{hotel.description}</p>
                  <p>{hotel.amenities}</p>
                  <button onClick={() => handleBookNow(hotel)}>Book Now</button>
                </div>
              ))}
            </div>
          </section>
        </main>
        {/* without searching validation */}
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
                  <p>INR {hotel.price}</p>
                  <button>Book Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* with searching validation  */}
        {/* <section className="featured-hotels-section">
          <h2>Featured Hotels</h2>
          <div className="hotel-list">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <div className="hotel-card" key={hotel.id}>
                  <img src={hotel.image} alt={hotel.name} />
                  <h3>{hotel.name}</h3>
                  <p>{hotel.description}</p>
                  <p>
                    Pricing: Standard Room - ${hotel.pricing.standardRoomPrice},
                    Deluxe Room - ${hotel.pricing.deluxeRoomPrice}
                  </p>
                  <p>Room Types: {hotel.roomTypes.join(", ")}</p>
                  <p>
                    Availability: {hotel.availability.startDate.toDateString()}{" "}
                    to {hotel.availability.endDate.toDateString()}
                  </p>
                  <p>{hotel.amenities}</p>
                  <button onClick={() => handleBookNow(hotel)}>Book Now</button>
                </div>
              ))
            ) : (
              <p>No hotels found. Please refine your search criteria.</p>
            )}
          </div>
        </section> */}
      </main>
      <footer>
        <p>&copy; 2023 Hotel Booking Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HotelBookingPage;
