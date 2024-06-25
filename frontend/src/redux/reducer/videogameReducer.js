import { GET_VIDEOGAMES, GET_BY_NAME, GET_DETAIL } from '../actions/videogameActions';
import { FETCH_GENRES_SUCCESS } from '../actions/genreActions';
import { FETCH_PLATFORMS_SUCCESS } from '../actions/platformActions';

const initialState = {
  allVideogames: [],
  genres: [],
  platforms: [],
  currentVideogame: {},
  isLoading: false,
};

function videogameReducer(state = initialState, action) {
  console.log('Reducer received action:', action);
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        isLoading: false,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case FETCH_PLATFORMS_SUCCESS:
      return {
        ...state,
        platforms: action.payload,
      };
    case GET_BY_NAME:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          allVideogames: action.payload,
        };
      } else {
        return state;
      }
    case GET_DETAIL:
      return {
        ...state,
        currentVideogame: action.payload,
      };
    default:
      return state;
  }
}

export default videogameReducer;
