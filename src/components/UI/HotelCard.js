import React, { useState } from "react";
import classes from "./HotelCard.module.css";

const HotelCard = ({ hotel }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayToggle = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className={classes["hotel-card"]}>
      <h2>{hotel.name}</h2>
      {/* <div>
        {hotel.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div> */}
      <p>{hotel.description}</p>
      <p>Price: ${hotel.price}</p>
      <button onClick={handleOverlayToggle}>View Details</button>

      {isOverlayOpen && (
        <div className={classes.overlay}>
          <div className={classes["overlay-content"]}>
            <h2>{hotel.name}</h2>
            {/* <div>
              {hotel.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              ))}
            </div> */}
            <p>{hotel.description}</p>
            <p>Price: ${hotel.price}</p>
            <button>Book Now</button>
          </div>
          <div
            className={classes["overlay-background"]}
            onClick={handleOverlayToggle}
          ></div>
        </div>
      )}
    </div>
  );
};

export default HotelCard;
