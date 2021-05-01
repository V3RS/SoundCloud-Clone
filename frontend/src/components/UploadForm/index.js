import React, { useState } from "react";
import { postSong } from "../../store/songs";
import { useDispatch } from "react-redux";

import "./UploadForm.css";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumCover, setAlbumCover] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postSong(title, artist, genre, albumName, albumCover, audioFile));
  };

  return (
    <div className="upload__form__c">
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      <div>TEST Upload</div>
      {/* title,
      genre,
      audioFile,
      imgUrl,
      artist,
      album, */}
      <div className="up__f__c">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Album Name"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
          />
          <label>Album Cover</label>
          <input
            type="file"
            placeholder="Album Cover"
            value={albumCover}
            onChange={(e) => setAlbumCover(e.target.value)}
          />
          <label>Audio File</label>
          <input
            type="file"
            placeholder="Audio/MP3"
            value={audioFile}
            onChange={(e) => setAudioFile(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
