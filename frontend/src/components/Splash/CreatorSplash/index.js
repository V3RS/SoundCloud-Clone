import React from "react";
import "./CreatorSplash.css";
import creatorPic from "./creators-page.jpg";

export default function CreatorSplash() {
  return (
    <div id="creator-splash-container">
      <img id="creator-pic" src={creatorPic} alt="creator picture" />
      <div id="creator-title">Calling all creators</div>
      <p id="creator-text">
        Get on SoundCloud to connect with fans, share your sounds, and grow your
        audience. What are you waiting for?
      </p>
      <a id="creator-find-btn">Find out more</a>
    </div>
  );
}
