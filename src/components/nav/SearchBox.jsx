import React, { useState } from 'react';
import './nav.css'

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='search'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBox;
