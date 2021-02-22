import React from "react";
import SplashNavigation from "./SplashNavigation";
import Slider from "./Slider";
import "./Splash.css";
import Search from "./Search";
import TrendingTracks from "./TrendingTracks";
import MobileSplash from "./MobileSplash";
import CreatorSplash from "./CreatorSplash";

export default function Splash({ isLoaded }) {
  return (
    <div className="splash-container">
      <div id="top-splash">
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
      <div id="bottom-splash">
        <MobileSplash />
        <CreatorSplash />
      </div>
    </div>
  );
}
