import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";

export default function Slider() {
  // const length = SliderData.length;
  const image1 = useRef();
  const image2 = useRef();

  // make seperate onClick to change slider to 0 and 1 depending on the button the user clicks
  // console.log("AM I GETTING REWRITTEN?!");

  const [slider, setSlider] = useState([]);

  const slideChange = () => {
    // console.log(image1.current.classList);
    image1.current.classList.add("slide-add");
    image2.current.classList.add("slide-add");
    // console.log(image1.current.classList, image2.current.classList);
    setTimeout(() => {
      image1.current.classList.remove("slide-add");
      image2.current.classList.remove("slide-add");
      const sliderCopy = slider.slice();
      console.log("slider before push ----->", slider);
      console.log("sliderCopy ----->", sliderCopy);
      const slideImg = sliderCopy.shift();
      console.log("img1", slideImg);
      sliderCopy.push(slideImg);
      const newSlider = (state, props) => {
        return sliderCopy;
      };
      setSlider(newSlider);
      console.log("images after push: ------ >", slider);
    }, 600);
  };

  useEffect(() => {
    const imgs = [
      <div key={0} ref={image1}>
        <img
          className="slider-img"
          src={SliderData[0].image}
          alt="studio picture"
        />
        <div>
          <div id="slider1title">Discover more with SoundWave Go+</div>
          <p id="slider1text">
            SoundWave Go+ lets you listen offline, ad-free, with over 150
            million tracks — and growing.
          </p>
          <div id="slider1btns">
            <a id="slider1btn1">Learn More</a>
            <a id="slider1btn2">Try It Free Here</a>
            <button className="slidbtns" onClick={slideChange}></button>
            <button className="slidbtns" onClick={slideChange}></button>
          </div>
        </div>
      </div>,
      <div ref={image2} key={1}>
        <img
          className="slider-img"
          src={SliderData[1].image}
          alt="studio picture"
        />
        <div>
          <div id="slider1title">Discover more with SoundWave Go+</div>
          <p id="slider1text">
            SoundWave Go+ lets you listen offline, ad-free, with over 150
            million tracks — and growing.
          </p>
          <div id="slider1btns">
            <a id="slider1btn1">Learn More</a>
            <a id="slider1btn2">Try It Free Here</a>
            <button className="slidbtns" onClick={slideChange}></button>
            <button className="slidbtns" onClick={slideChange}></button>
          </div>
        </div>
      </div>,
    ];
    setSlider(imgs);
  });

  // const transform = `translateX(${slider * -50}%)`;
  // style={{ transform }}

  // useEffect(() => {}, [slideChange]);

  return (
    <div className="splash-slider-container">
      <div className="slide">{slider}</div>
      {/* <div>
        <div id="slider1title">Discover more with SoundWave Go+</div>
        <p id="slider1text">
          SoundWave Go+ lets you listen offline, ad-free, with over 150 million
          tracks — and growing.
        </p>
        <div id="slider1btns">
          <a id="slider1btn1">Learn More</a>
          <a id="slider1btn2">Try It Free Here</a>
          <button className="slidbtns" onClick={slideChange}></button>
          <button className="slidbtns" onClick={slideChange}></button>
        </div>
      </div> */}
    </div>
  );
}
