import React from "react";

const SearchBar = ({ searchValue, onSearchChange }) => (
  <input
    type="text"
    value={searchValue}
    onChange={onSearchChange}
    placeholder="Cari catatan..."
  />
);

export default SearchBar;
