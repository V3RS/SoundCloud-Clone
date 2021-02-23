import React from "react";
import "./MobileSplash.css";
import mobImg from "./mob-sc.jpg";

export default function MobileSplash() {
  return (
    <div id="mob-container">
      <div id="mob-img">
        <img src={mobImg} alt="mobile image" />
      </div>
      <div>
        <h1 id="mob-title">Never stop listening</h1>
      </div>
      <div id="mob-border"></div>
      <div>
        <p id="mob-txt">
          SoundWave is only available in the browser, but will be accessible in
          mobile browsers soon.
        </p>
      </div>
      <div id="mob-btns">
        <button id="apl" disabled></button>
        <button id="goog" disabled></button>
      </div>
    </div>
  );
}
