import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comments";

import "./comment.css";

export default function Comment({ comment, user, songId }) {
  const dispatch = useDispatch();

  return (
    <div className="com__c">
      <div className="com__un">{comment.User.username}</div>
      <div className="com__msg">{comment.comment}</div>
      {user?.id === comment.User.id && (
        <div className="com__btns">
          <i
            className="fas fa-edit edit__btn"
            // onClick={(e) => setEditComForm(!editComForm)}
          ></i>
          <i
            className="fas fa-trash-alt delete__btn"
            onClick={() => dispatch(deleteComment(songId, comment.id, user.id))}
          ></i>
        </div>
      )}
    </div>
  );
}
