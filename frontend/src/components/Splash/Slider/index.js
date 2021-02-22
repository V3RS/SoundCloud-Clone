import React, { useState } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";

export default function Slider() {
  const [slider, setSlider] = useState(0);
  const length = SliderData.length;

  // make seperate onClick to change slider to 0 and 1 depending on the button the user clicks
  const slideChange = () => setSlider(slider === 0 ? 1 : 0);

  // const transform = `translateX(${slider * -50}%)`;
  // style={{ transform }}

  return (
    <div className="splash-slider-container">
      <div id="slider1title">Discover more with SoundWave Go+</div>
      <p id="slider1text">
        SoundCloud Go+ lets you listen offline, ad-free, with over 150 million
        tracks — and growing.
      </p>
      <div id="slider1btns">
        <a id="slider1btn1">Learn More</a>
        <a id="slider1btn2">Try It Free Here</a>
      </div>
      {SliderData.map((slide, i) => {
        return (
          <div className={i === slider ? "slide active" : "slide"} key={i}>
            {i === slider && (
              <img
                className="slider-img"
                src={slide.image}
                alt="studio picture"
              />
            )}
          </div>
        );
      })}
      <button className="slidbtns" onClick={slideChange}>
        left
      </button>
      <button className="slidbtns" onClick={slideChange}>
        right
      </button>
    </div>
  );
}
