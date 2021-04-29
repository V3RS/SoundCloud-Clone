import React from "react";
import "./comment.css";

export default function Comment({ comment }) {
  return (
    <div className="com__c">
      <div className="com__un">{comment.User.username}</div>
      <div className="com__msg">{comment.comment}</div>
    </div>
  );
}
