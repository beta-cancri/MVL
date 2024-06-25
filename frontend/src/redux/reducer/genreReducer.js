import { FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../actions/genreActions';

const initialState = {
  genres: [],
  error: null,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case FETCH_GENRES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default genreReducer;
