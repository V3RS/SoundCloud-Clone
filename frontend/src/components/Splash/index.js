import React from "react";
import SplashNavigation from "./SplashNavigation";
import Slider from "./Slider";
import "./Splash.css";
import Search from "./Search";
import TrendingTracks from "./TrendingTracks";
import MobileSplash from "./MobileSplash";
import CreatorSplash from "./CreatorSplash";
import SplashFooter from "./SplashFooter";

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
        {/* <div id="thanks-container"> */}
        <div id="thanks-splash">
          <div id="thanks-content">
            <div>Thanks for listening. Now join in.</div>
            <p>
              Save tracks, follow artists and build playlists. All for free.
            </p>
            <button id="splash-signup-btn">Create account</button>
            <div id="splash-login-container">
              <p id="splash-log-txt">Already have an account?</p>
              <button id="splash-login-btn">Sign in</button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <SplashFooter />
    </div>
  );
}
