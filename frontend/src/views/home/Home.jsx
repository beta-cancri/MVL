import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../../components/cards/Cards';
import './HomeStyle.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:3001/videogame');
        const mappedGames = response.data.map(game => ({
          id: game.id,
          name: game.name,
          genres: game.genres,
          image: game.background_image, // Ensure correct field name
          platforms: game.platforms,
        }));
        setGames(mappedGames);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="homeStyle">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Cards allVideogames={games} />
      )}
    </div>
  );
};

export default Home;
