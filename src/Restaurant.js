import React from 'react';
import './Restaurant.css';
import Rating from '@material-ui/lab/Rating';

function Restaurant({ id, name, image, distance, deliveryFee, rating }) {
  return (
    <div className="restaurant">
      <div className="restaurant__image">
        <img src={image} alt="" />
        <span className="restaurant__rating">
          {rating}
          <Rating
            value={rating}
            precision={0.1}
            size="medium"
            max="1"
            readOnly
          />
        </span>
      </div>
      <span className="restaurant__name">{name}</span>
      <div className="restaurant__details">
        <span className="restaurant__distance">{distance} km</span>
        <span className="restaurant__deliveryFee">${deliveryFee} delivery</span>
      </div>
    </div>
  );
}

export default Restaurant;
