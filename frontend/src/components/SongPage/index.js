import React, { useEffect } from "react";
import Navigation from "../Navigation";
import "./SongPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentSong } from "../../store/songs";

export default function SongPage({ isLoaded }) {
  const { songId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentSong(songId));
  }, [dispatch]);

  const song = useSelector((state) => state.songsRed.song);

  console.log("song ----> ", song?.currentSong);

  //   console.log(songId);

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      <h1 id="meh">Song Page</h1>
    </div>
  );
}
