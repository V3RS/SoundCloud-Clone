import React, { useEffect } from "react";
import Navigation from "../Navigation";
import Comment from "../Comment";
import CommentForm from "./CommentForm";
import "./SongPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentSong } from "../../store/songs";
import { getSongComments } from "../../store/comments";
import { Redirect } from "react-router-dom";

export default function SongPage({ isLoaded }) {
  const { songId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentSong(songId));
    dispatch(getSongComments(songId));
  }, [dispatch]);

  const song = useSelector((state) => state.songsRed.currentSong);
  const comments = useSelector((state) => state.comments);
  const user = useSelector((state) => state.session.user);

  //   console.log("song ----> ", song);

  //   console.log(songId);
  // if (!song) return <Redirect to="/" />;

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      <div id="song-page-container">
        <div>
          <div id="song-show-page">
            <div id="song-banner">
              <div id="song-show-play"></div>

              <div id="song-banner-info">
                <div id="song-banner-top">
                  <h2 id="song-banner-artist">{song?.currentSong.artist}</h2>
                  <h3 id="song-banner-created-at"></h3>
                </div>

                <div id="song-banner-bottom">
                  <h1 id="song-banner-title">{song?.currentSong.title}</h1>
                  <div id="player-container">
                    <audio
                      className="audio-current-song"
                      controls
                      controlsList="nodownload"
                      src={song?.currentSong.audioFile}
                    ></audio>
                  </div>
                </div>
              </div>

              <div>
                <img id="current-song-img" src={song?.currentSong.imgUrl} />
              </div>
            </div>

            <div id="song-comments">
              <div id="song-comments-container">
                <CommentForm songId={songId} user={user} />
                <div id="song-comments-stats">
                  <div id="song-stats-buttons">
                    <button className="song-btns" id="sb1">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="song-btns" id="sb2">
                      <i className="fas fa-retweet"></i>
                      Repost
                    </button>
                    <button className="song-btns" id="sb3">
                      <i className="fas fa-share-square"></i>
                      Share
                    </button>
                    <button className="song-btns" id="sb4">
                      <i className="fas fa-bars"></i>
                      Add to Next up
                    </button>
                    <div id="more-dropdown">
                      <button className="song-btns" id="sb5">
                        <i className="fas fa-ellipsis-h"></i>
                        More
                      </button>
                    </div>
                  </div>

                  <div id="song-stats">
                    <div className="songs-stats-divs">
                      <i className="fas fa-play"></i>
                      <p>100</p>
                    </div>
                    <div className="songs-stats-divs">
                      <i className="fas fa-heart"></i>
                      <p>700</p>
                    </div>
                    <div className="songs-stats-divs">
                      <i className="fas fa-retweet"></i>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div id="song-comments-index"></div>
              </div>
              <div id="song-desc-and-comments">
                {comments &&
                  comments?.map((comment) => (
                    <Comment
                      comment={comment}
                      key={comment.id}
                      user={user}
                      songId={songId}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
