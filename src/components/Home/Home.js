import React, { useState } from "react";
import "./Home.css";
import hotel2 from "../../images/hotel2.jpg";

const DummyHotels = [
  {
    id: 1,
    name: "ITC-Rajputana",
    image: hotel2,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 100,
      deluxeRoomPrice: 150,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 2,
    name: "Trident",
    image: hotel2,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 100,
      deluxeRoomPrice: 150,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 3,
    name: "The Leela",
    image: hotel2,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 100,
      deluxeRoomPrice: 150,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 4,
    name: "Hotel Raddison",
    image: hotel2,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 100,
      deluxeRoomPrice: 150,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
  {
    id: 5,
    name: "Holiday Inn",
    image: hotel2,
    description: "Near Jaipur railway station",
    amenities: ["Free cancellation", "Breakfast included"],
    pricing: {
      standardRoomPrice: 100,
      deluxeRoomPrice: 150,
    },
    roomTypes: ["Standard", "Deluxe"],
    availability: {
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-06-10"),
    },
    reviews: [],
  },
];

const HotelBookingPage = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [featuredHotels, setFeaturedHotels] = useState(DummyHotels);

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

  const handleReviewSubmit = (e, hotelId, rating, review) => {
    e.preventDefault();

    const hotelIndex = featuredHotels.findIndex(
      (hotel) => hotel.id === hotelId
    );
    if (hotelIndex !== -1) {
      const updatedHotels = [...featuredHotels];
      const hotel = updatedHotels[hotelIndex];
      const updatedReviews = [...hotel.reviews, { rating, review }];

      updatedHotels[hotelIndex] = { ...hotel, reviews: updatedReviews };

      setFeaturedHotels(updatedHotels);
    }
    setRating("");
    setReview("");
  };

  const handleBookNow = (hotel) => {
    console.log("Booking hotel:", hotel);
  };

  return (
    <div className="hotel-booking-page">
      <header>
        <h1>Welcome to our Hotel Booking Website!</h1>
      </header>
      <>
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
          <h2>Featured Hotels</h2>
          <div className="hotel-list">
            {featuredHotels.map((hotel) => (
              <div className="hotel-card" key={hotel.id}>
                <img src={hotel.image} alt={hotel.name} />
                <h3>{hotel.name}</h3>
                <p>{hotel.description}</p>
                <p>
                  Pricing: Standard Room - ${hotel.pricing.standardRoomPrice},
                  Deluxe Room - ${hotel.pricing.deluxeRoomPrice}
                </p>
                <p>Reviews: {hotel.reviews.length}</p>
                <button onClick={() => handleBookNow(hotel)}>Book Now</button>
              </div>
            ))}
          </div>
        </section>
        {/* with search validation */}

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
                  <p>Reviews: {hotel.reviews.length}</p>
                  <button onClick={() => handleBookNow(hotel)}>Book Now</button>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Rating (1-5)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <textarea
                    placeholder="Write a review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  ></textarea>
                  <button
                    onClick={(e) =>
                      handleReviewSubmit(e, hotel.id, rating, review)
                    }
                  >
                    Submit Review
                  </button>
                </div>
              ))
            ) : (
              <p>No hotels found. Please refine your search criteria.</p>
            )}
          </div>
        </section> */}
      </>
      <footer>
        <p>&copy; 2023 Hotel Booking Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HotelBookingPage;
