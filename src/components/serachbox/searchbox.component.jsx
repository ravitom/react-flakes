import React from "react";
import "./serachbox.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="searchTerm"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
