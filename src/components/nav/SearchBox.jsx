import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search operations with the search term
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <RiSearchLine className="search-icon" />
    </div>
  );
};

export default SearchBox;
