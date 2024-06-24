import React from 'react';

const SortOptionFilter = ({ value, onChange }) => {
  return (
    <div className="filterGroup">
      <h3>Sort By</h3>
      <select name="sortOption" value={value} onChange={onChange}>
        <option value="rating">Rating</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default SortOptionFilter;
