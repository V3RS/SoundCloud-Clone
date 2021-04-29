import { csrfFetch } from "./csrf";

const SET_COMMENTS = "comments/setComments";

const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

export const getSongComments = (songId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${songId}`);
  const data = await response.json();
  dispatch(setComments(data.comments));
};

export const postComment = (songId, comment, userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${songId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      userId,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.comments));
};

export const deleteComment = (songId, commentId, userId) => async (
  dispatch
) => {
  const response = await csrfFetch(`/api/comments/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      commentId,
      songId,
      userId,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.comments));
};

export const updateComment = (commentId, songId, comment, userId) => async (
  dispatch
) => {
  const response = await csrfFetch(`/api/comments/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      commentId,
      comment,
      songId,
      userId,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.comments));
};

const initialState = [];
const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_COMMENTS:
      newState = action.comments;
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
