import React from 'react';

const NewReleasesFilter = ({ value, onChange }) => {
  return (
    <div className="filterGroup">
      <h3>New Releases</h3>
      <select name="newReleases" value={value} onChange={onChange}>
        <option value="">Select</option>
        <option value="last30Days">Last 30 Days</option>
        <option value="thisWeek">This Week</option>
        <option value="nextWeek">Next Week</option>
      </select>
    </div>
  );
};

export default NewReleasesFilter;
