const GET_ALL_SONGS = "songs/getAllSongs";

const getSongs = (songs) => {
  return {
    type: GET_ALL_SONGS,
    songs,
  };
};

const getAllSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  const data = await res.json();
  dispatch(getSongs(data));
  return res;
};

const initialState = { songs: null };
const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_SONGS:
      newState = Object.assign({}, state);
      newState.songs = action.songs;
      return newState;
  }
};
