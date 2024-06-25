import React from 'react';
import Card from '../card/Card';
import './CardsStyle.css';

const Cards = ({ allVideogames, onCardClick }) => {
  console.log('Rendering Cards component with games:', allVideogames);

  if (allVideogames.length === 0) {
    return <p>No games available.</p>;
  }

  return (
    <div className="cardList">
      {allVideogames.map((game, index) => (
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
