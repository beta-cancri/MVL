import React from 'react';

const PlatformFilter = ({ platforms, value, onChange }) => {
  return (
    <div className="filterGroup">
      <h3>Platforms</h3>
      <select name="platform" value={value} onChange={onChange}>
        <option value="">Select Platform</option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>{platform}</option>
        ))}
      </select>
    </div>
  );
};

export default PlatformFilter;
