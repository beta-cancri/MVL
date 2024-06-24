import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import './HomeStyle.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/videogames');
        setGames(response.data);
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
      <Navbar />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="gamesGridStyle">
          {games.map(game => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
