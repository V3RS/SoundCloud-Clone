import { csrfFetch } from "./csrf";

const GET_COMMENTS = "comments/getComments";

const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    comments,
  };
};

export const getSongComments = (songId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${songId}`);
  const data = await response.json();
  //   console.log(data.comments);
  dispatch(getComments(data.comments));
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
  //   console.log("LLLLL", data.comments);
  dispatch(getComments(data.comments));
};

const initialState = [];
const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = action.comments;
      return newState;
    // case CREATE_COMMENT:
    //     return [...state, action.comment];
    // case DELETE_COMMENT:
    //   return state.filter((comment) => comment.id !== action.commentId);
    default:
      return state;
  }
};

export default commentReducer;
