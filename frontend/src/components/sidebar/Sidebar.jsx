import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SidebarStyle.css';

const Sidebar = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.videogames?.genres || []);
  const platforms = useSelector(state => state.videogames?.platforms || []);

  const [filters, setFilters] = useState({
    newReleases: '',
    bestOfYear: '',
    topAllTime: false,
    bestRatedPerYear: '',
    genre: '',
    platform: '',
    order: ''
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFilters = {
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      newReleases: '',
      bestOfYear: '',
      topAllTime: false,
      bestRatedPerYear: '',
      genre: '',
      platform: '',
      order: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="sidebarStyle">
      <h2>Filters</h2>
      <Link to="/home" className="sidebarButton">Home</Link>
      <button onClick={resetFilters} className="sidebarButton">All Games</button>

      <div className="filterGroup">
        <h3>New Releases</h3>
        <select name="newReleases" value={filters.newReleases} onChange={handleFilterChange}>
          <option value="">Select</option>
          <option value="last30Days">Last 30 Days</option>
          <option value="thisWeek">This Week</option>
          <option value="nextWeek">Next Week</option>
        </select>
      </div>

      <div className="filterGroup">
        <h3>Best of the Year</h3>
        <input
          type="checkbox"
          name="topAllTime"
          checked={filters.topAllTime}
          onChange={handleFilterChange}
        />
        Top 250 Games of All Time
      </div>

      <div className="filterGroup">
        <h3>Best Rated Games Per Year</h3>
        <select name="bestRatedPerYear" value={filters.bestRatedPerYear} onChange={handleFilterChange}>
          <option value="">Select Year</option>
          {Array.from({ length: 50 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>
      </div>

      <div className="filterGroup">
        <h3>Genres</h3>
        <select name="genre" value={filters.genre} onChange={handleFilterChange}>
          <option value="">Select Genre</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="filterGroup">
        <h3>Platforms</h3>
        <select name="platform" value={filters.platform} onChange={handleFilterChange}>
          <option value="">Select Platform</option>
          {platforms.map(platform => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </select>
      </div>

      <div className="filterGroup">
        <h3>Sort Order</h3>
        <select name="order" value={filters.order} onChange={handleFilterChange}>
          <option value="">Select Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
