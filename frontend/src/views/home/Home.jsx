import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions/videogameActions';
import Cards from '../../components/cards/Cards';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import './HomeStyle.css';

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.videogames?.allVideogames || []);
  const isLoading = useSelector(state => state.videogames?.isLoading);

  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    console.log('Dispatching getVideogames action');
    dispatch(getVideogames());
  }, [dispatch]);

  useEffect(() => {
    if (games.length > 0) {
      console.log('Updating filteredGames state with initial games', games);
      setFilteredGames(games.slice(0, 15)); // Show only the first 15 results initially
    }
  }, [games]);

  const handleFilterChange = (filters) => {
    console.log('Filters changed', filters);
    const filtered = applyFilters(games, filters); // Use applyFilters utility function
    setFilteredGames(filtered.slice(0, 15)); // Show only the first 15 results after filtering
    console.log('Filtered games', filtered);
  };

  return (
    <div className="homeStyle">
      <Sidebar onFilterChange={handleFilterChange} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Cards allVideogames={filteredGames} onCardClick={(id) => console.log('Card clicked', id)} />
      )}
    </div>
  );
};

export default Home;
