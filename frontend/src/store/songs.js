const GET_ALL_SONGS = "songs/getAllSongs";
const GET_TWELVE_SONGS = "songs/getTwelveSongs";

const getSongs = (songs) => {
  return {
    type: GET_ALL_SONGS,
    songs,
  };
};
const getTwelveSongs = (songs) => {
  return {
    type: GET_TWELVE_SONGS,
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

export const getTrendingSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs/twelve");
  const data = await res.json();
  //   console.log(data);
  dispatch(getTwelveSongs(data));
  return res;
};

const initialState = { songs: null, trendingSongs: null };
const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_SONGS:
      newState = Object.assign({}, state, { songs: action.songs });
      return newState;
    case GET_TWELVE_SONGS:
      newState = Object.assign({}, state, { trendingSongs: action.songs });
      return newState;
    default:
      return state;
  }
};

export default songsReducer;
