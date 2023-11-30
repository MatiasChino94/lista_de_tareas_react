import React from 'react';
import './SearchInput.css';

const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <input className='search-input'
      type="text"
      placeholder="Buscar tarea..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
