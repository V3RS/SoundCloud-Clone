import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div id="search-container">
      <input
        id="search-splash"
        placeholder="Search for artists, bands, tracks, podcasts"
        type="search"
      />
      <div id="search-btn-div">
        <button id="search-btn"></button>
      </div>
      <div id="search-or-div">
        <p id="search-or">or</p>
      </div>
      <button id="upload-search-btn">Upload your own</button>
    </div>
  );
}