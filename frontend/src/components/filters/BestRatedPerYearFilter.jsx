import React from 'react';

const BestRatedPerYearFilter = ({ value, onChange }) => {
  return (
    <div className="filterGroup">
      <h3>Best Rated Games Per Year</h3>
      <select name="bestRatedPerYear" value={value} onChange={onChange}>
        <option value="">Select Year</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default BestRatedPerYearFilter;
