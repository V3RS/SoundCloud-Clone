import React from "react";

export default function MusicPlayer() {
  return (
    <div id="music-player">
      <audio
        id="player"
        controls
        src="https://www.computerhope.com/jargon/m/example.mp3"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}
