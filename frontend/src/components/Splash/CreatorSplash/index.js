import React from "react";
import "./CreatorSplash.css";
import creatorPic from "./creators-page.jpg";

export default function CreatorSplash() {
  return (
    <div id="creator-splash-container">
      <img id="creator-pic" src={creatorPic} alt="creator picture" />
    </div>
  );
}
