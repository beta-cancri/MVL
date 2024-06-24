import React from 'react';

const GenreFilter = ({ genres, value, onChange }) => {
  return (
    <div className="filterGroup">
      <h3>Genres</h3>
      <select name="genre" value={value} onChange={onChange}>
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
