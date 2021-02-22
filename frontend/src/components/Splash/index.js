import React from "react";
import SplashNavigation from "./SplashNavigation";
import Slider from "./Slider";
import "./Splash.css";
import Search from "./Search";
import TrendingTracks from "./TrendingTracks";

export default function Splash({ isLoaded }) {
  return (
    <div className="splash-container">
      <SplashNavigation isLoaded={isLoaded} />
      <div className="slider-container">
        <Slider />
      </div>
      <div className="splash-search-box-container">
        <Search />
      </div>
      <div className="trend-tracks-container">
        <TrendingTracks />
      </div>
    </div>
  );
}
