import React from 'react';

const SortOrderFilter = ({ value, onChange }) => {
  return (
    <div className="filterGroup">
      <h3>Sort Order</h3>
      <select name="sortOrder" value={value} onChange={onChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortOrderFilter;
