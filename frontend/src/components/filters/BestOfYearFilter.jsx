import React from 'react';

const BestOfYearFilter = ({ value, onChange }) => {
  return (
    <div className="filterGroup">
      <h3>Best of the Year</h3>
      <input
        type="checkbox"
        name="bestOfYear"
        checked={value}
        onChange={(e) => onChange({ target: { name: 'bestOfYear', value: e.target.checked } })}
      />
      Best of the Year
    </div>
  );
};

export default BestOfYearFilter;
