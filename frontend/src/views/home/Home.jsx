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
    console.log('Updating filteredGames state with initial games', games);
    setFilteredGames(games.slice(0, 15)); // Show only the first 15 results initially
  }, [games]);

  const handleFilterChange = (filters) => {
    console.log('Filters changed', filters);
    let filtered = [...games];

    if (filters.newReleases) {
      const today = new Date();
      const compareDate = (date) => {
        const releaseDate = new Date(date);
        if (filters.newReleases === 'last30Days') {
          return releaseDate >= new Date(today.setDate(today.getDate() - 30));
        } else if (filters.newReleases === 'thisWeek') {
          const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
          return releaseDate >= startOfWeek && releaseDate <= new Date(startOfWeek.setDate(startOfWeek.getDate() + 6));
        } else if (filters.newReleases === 'nextWeek') {
          const startOfNextWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7));
          return releaseDate >= startOfNextWeek && releaseDate <= new Date(startOfNextWeek.setDate(startOfNextWeek.getDate() + 6));
        }
        return false;
      };
      filtered = filtered.filter(game => compareDate(game.released));
    }

    if (filters.bestOfYear) {
      const currentYear = new Date().getFullYear();
      filtered = filtered.filter(game => new Date(game.released).getFullYear() === currentYear)
        .sort((a, b) => b.rating - a.rating);
    }

    if (filters.bestRatedPerYear) {
      filtered = filtered.filter(game => new Date(game.released).getFullYear() === parseInt(filters.bestRatedPerYear))
        .sort((a, b) => b.rating - a.rating);
    }

    if (filters.genre) {
      filtered = filtered.filter(game => game.genres.includes(filters.genre));
    }

    if (filters.platform) {
      filtered = filtered.filter(game => game.platforms.includes(filters.platform));
    }

    if (filters.order) {
      filtered = filtered.sort((a, b) => filters.order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    }

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
