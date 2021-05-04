import React, { useState } from "react";
import { postSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./UploadForm.css";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumCover, setAlbumCover] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const songs = useSelector((state) => state.songsRed.songs);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("aaaaAAA", audioFile);
    const song = {
      title,
      artist,
      genre,
      albumName,
      albumCover,
      audioFile,
    };
    const newSong = dispatch(postSong(song));
    // console.log(newSong);
    // history.push(`/songs/${newSong.id}`);
    history.push(`/dashboard`);
  };

  return (
    <div className="upload__form__c">
      <div className="up__f__c">
        <form onSubmit={handleSubmit}>
          <div id="upload__title">Upload</div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="upload__inputs"
            required
          />
          <input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="upload__inputs"
            required
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="upload__inputs"
            required
          />
          <input
            type="text"
            placeholder="Album Name"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            className="upload__inputs"
            required
          />
          <input
            type="text"
            placeholder="Album Cover Image URL"
            value={albumCover}
            onChange={(e) => setAlbumCover(e.target.value)}
            className="upload__inputs"
            required
          />
          <label>Audio File</label>
          <input
            type="file"
            placeholder="Audio/MP3"
            onChange={(e) => setAudioFile(e.target.files[0])}
            className="upload__inputs"
            id="audio__input"
            required
          />
          <button className="uploadBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
