import React from 'react';
import Card from '../card/Card';
import './CardsStyle.css';

const Cards = ({ allVideogames, onCardClick }) => {
  const videogamesList = Array.isArray(allVideogames) ? allVideogames : [];

  return (
    <div className="cardList">
      {videogamesList.map((game, index) => (
        <Card
          key={index}
          id={game.id}
          name={game.name}
          genres={game.genres}
          image={game.image}
          platforms={game.platforms}
          onClick={() => onCardClick(game.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
