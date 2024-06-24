import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailStyle.css';

const Detail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(`/videogame/${id}`);
        setGame(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGame();
  }, [id]);

  return (
    <div className="detailStyle">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{game.name}</h1>
          <p>{game.description}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
