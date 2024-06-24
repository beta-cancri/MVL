import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarStyle.css';

const Sidebar = ({ isLoggedIn, user }) => {
  const [filters, setFilters] = useState({
    newReleases: '',
    bestOfYear: '',
    topAllTime: false,
    bestRatedPerYear: '',
    genre: '',
    platform: ''
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const resetFilters = () => {
    setFilters({
      newReleases: '',
      bestOfYear: '',
      topAllTime: false,
      bestRatedPerYear: '',
      genre: '',
      platform: ''
    });
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
          onChange={(e) => setFilters({ ...filters, topAllTime: e.target.checked })}
        />
        Top 250 Games of All Time
      </div>

      <div className="filterGroup">
        <h3>Best Rated Games Per Year</h3>
        <select name="bestRatedPerYear" value={filters.bestRatedPerYear} onChange={handleFilterChange}>
          <option value="">Select Year</option>
          {/* Add options for years here */}
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

      <div className="filterGroup">
        <h3>Genres</h3>
        <select name="genre" value={filters.genre} onChange={handleFilterChange}>
          <option value="">Select Genre</option>
          {/* Add options for genres here */}
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
        </select>
      </div>

      <div className="filterGroup">
        <h3>Platforms</h3>
        <select name="platform" value={filters.platform} onChange={handleFilterChange}>
          <option value="">Select Platform</option>
          {/* Add options for platforms here */}
          <option value="pc">PC</option>
          <option value="playstation">PlayStation</option>
          <option value="xbox">Xbox</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
