import React, { useEffect } from "react";
import "./TrendingTracks.css";
import { useDispatch, useSelector } from "react-redux";

import { getTrendingSongs } from "../../../store/songs";

export default function TrendingTracks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingSongs());
  }, [dispatch]);

  const trendingSongs = useSelector((state) => state.songsRed.trendingSongs);
  // console.log(trendingSongs);

  return (
    <div className="tr-container">
      <p id="trending-tracks-title">
        Hear what’s trending in the SoundWave community
      </p>
      <div className="trending-covers-container">
        {trendingSongs?.twelveSongs.map((song) => {
          return (
            <div className="trending-cover-container" key={song.id}>
              <img className="trending-cover" src={song.imgUrl}></img>
              <a className="trending-cover-title">{song.title}</a>
              <a className="trending-cover-artist">{song.artist}</a>
            </div>
          );
        })}
      </div>
      <div className="tt-btn-box">
        <button id="trending-tracks-btn">Explore trending playlists</button>
      </div>
    </div>
  );
}
