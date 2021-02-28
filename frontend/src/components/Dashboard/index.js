import React, { useEffect } from "react";
import MusicPlayer from "../MusicPlayer";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";

import { getAllSongs } from "../../store/songs";
import "./Dashboard.css";

export default function Dashboard({ isLoaded }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  const songs = useSelector((state) => state.songsRed.songs);

  return (
    <div id="top-dashboard">
      <Navigation isLoaded={isLoaded} />
      <div className="dashboard-tracks-container">
        <div className="dashboard-songs">
          {songs?.allSongs.map((song) => {
            return (
              <div className="dashboard-cover-container" key={song.id}>
                <img className="dashboard-cover" src={song.imgUrl}></img>
                <a className="dashboard-cover-title">{song.title}</a>
                <a className="dashboard-cover-artist">{song.artist}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
