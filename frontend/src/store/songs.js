const GET_ALL_SONGS = "songs/getAllSongs";

const getSongs = (songs) => {
  return {
    type: GET_ALL_SONGS,
    songs,
  };
};

export const getAllSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  const data = await res.json();
  //   console.log(data);
  dispatch(getSongs(data));
  return res;
};

const initialState = {
  songs: null,
  //   songs: null;
};
const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_SONGS:
      newState = Object.assign({}, state, { songs: action.songs });
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
