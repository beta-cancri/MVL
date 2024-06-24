import React from 'react';
import './CardStyle.css';

const Card = ({ game }) => {
  return (
    <div className="cardStyle">
      <img src={game.image} alt={game.name} className="cardImgStyle" />
      <div className="cardInfoStyle">
        <h3>{game.name}</h3>
        <p>{game.platforms.join(', ')}</p>
        <p>Rating: {game.rating}</p>
      </div>
    </div>
  );
};

export default Card;
