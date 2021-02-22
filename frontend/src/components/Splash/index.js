import React from "react";
import SplashNavigation from "./SplashNavigation";
import Slider from "./Slider";
import "./Splash.css";
import Search from "./Search";
import { SliderData } from "./SliderData";

export default function Splash({ isLoaded }) {
  return (
    <div className="splash-container">
      <SplashNavigation isLoaded={isLoaded} />
      <div className="slider-container">
        {SliderData.map((slide, i) => {
          return (
            <img
              className="slider-img"
              src={slide.image}
              alt="studio picture"
            />
          );
        })}
        <Slider />
      </div>
      <div className="splash-search-box-container">
        <Search />
      </div>
    </div>
  );
}
