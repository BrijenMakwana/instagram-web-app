import React, { useState } from "react";
import "./SearchBar.css";
import { BiSearch } from "react-icons/bi";
import { IoCloseCircle } from "react-icons/io5";

export default function SearchBar() {
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  return (
    <div
      className="search-bar-container"
      onFocus={() => setShowSearchIcon(false)}
      onBlur={() => setShowSearchIcon(true)}
    >
      {/* search icon */}
      {showSearchIcon && (
        <BiSearch
          color="rgb(143,143,143)"
          size={18}
          style={{ marginLeft: 4 }}
        />
      )}

      <input type="text" placeholder="Search" className="search-input" />
      {/* search close */}
      {!showSearchIcon && (
        <IoCloseCircle
          color="rgb(143,143,143)"
          size={17}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}
