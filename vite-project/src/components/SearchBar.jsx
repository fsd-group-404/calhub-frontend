import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetInputField = () => {
    setSearchTerm('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClearSearch = () => {
    console.log("CLEARING SEARCH")
    onSearch('')
    resetInputField()
};

  return (
    <div className="search-bar-container">
      <form className="search-bar">
        <input
          value={searchTerm}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Search your course here..."
          className="search-input"
        />
        <button onClick={callSearchFunction} type="submit" className="search-button">
          🔍
        </button>
        <button onClick={handleClearSearch} type="button" className="clear-button">
          ❌
        </button>
      </form>
      <style jsx>{`
        .search-bar-container {
          display: flex;
          justify-content: center;
          margin: 20px;
          max-width: 1600px;
          width: 90%; 
          margin-left: auto;
          margin-right: auto;
        }
        .search-bar {
          display: flex;
          width: 90%;
          border: 2px solid #FFE1B6;
          border-radius: 10px;
          background-color: #0E0E39;
          color: white;
        }
        .search-input {
          padding: 10px;
          font-size: 16px;
          border: none;
          outline: none;
          flex: 1;
          color: white;
          background-color: transparent;
        }
        .search-button, .clear-button {
          padding: 10px;
          border: none;
          border-left: 2px solid #FFE1B6;
          background-color: #0E0E39;
          cursor: pointer;
          outline: none;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
