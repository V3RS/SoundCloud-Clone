import React from "react";
import { useDispatch } from "react-redux";
import { openLogin } from "../../../store/modal";
import "./Search.css";

export default function Search() {
  const dispatch = useDispatch();

  return (
    <div id="search-container1">
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
        <div id="up-btn-div">
          <button id="upload-search-btn" onClick={() => dispatch(openLogin())}>
            Upload your own
          </button>
        </div>
      </div>
    </div>
  );
}
