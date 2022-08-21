import React from 'react';

const Search = ({ setSearchTerm }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by state"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
