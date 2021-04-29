import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../../store/comments";

export default function CommentForm({ songId, user }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment(songId, comment, user.id));
    setComment("");
  };

  return (
    <div id="song-comments-form-container">
      <form id="song-comments-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
