import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../../store/comments";

export default function CommentForm({ songId, user, msg, setEditComForm }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  useEffect(() => {
    setComment(msg.comment);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateComment(msg.id, songId, comment, user.id));
    setComment("");
    setEditComForm(false);
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
