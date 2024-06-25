import React from 'react';
import { Link } from "react-router-dom";
import './CardStyle.css';

const Card = ({ id, name, genres, image, platforms, onClick }) => {
  console.log("Rendering videogame:", { id, name, genres, image });

  return (
    <div className="cardContainer" onClick={onClick}>
      <div className="cardImageContainer">
        <img src={image} alt={name} className="cardImage" />
      </div>
      <div className="cardContent">
        <Link to={`/home/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>{name || "No name available"}</h2>
          <p>{genres || "No genres available"}</p>
          <p>{platforms || "No platforms available"}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
