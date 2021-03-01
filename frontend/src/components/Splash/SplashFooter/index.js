import React from "react";
import "./SplashFooter.css";

export default function SplashFooter() {
  return (
    <div id="sp-ft-container">
      <div id="splash-footer-container">
        <div id="splash-footer-list">
          <a
            className="splash-footer-content"
            href="https://github.com/V3RS/SoundCloud-Clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="splash-footer-content"
            href="https://www.linkedin.com/in/veerkaran-singh-45b4a9190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="splash-footer-content">Meet The Creator</a>
        </div>
      </div>
    </div>
  );
}
