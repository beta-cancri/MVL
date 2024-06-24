import { GET_VIDEOGAMES, GET_BY_NAME, GET_DETAIL } from '../actions/videogameActions';

const initialState = {
  allVideogames: [],
  videogamesCopy: [],
  genres: [],
  platforms: [],
  currentVideogame: {},
  isLoading: false,
};

function videogameReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_VIDEOGAMES':
      return {
        ...state,
        isLoading: true,
      };
    case GET_VIDEOGAMES:
      console.log('Reducer received GET_VIDEOGAMES action:', action.payload);
      return {
        ...state,
        allVideogames: action.payload.results || [],
        videogamesCopy: action.payload.results || [],
        genres: action.payload.genres || [],
        platforms: action.payload.platforms || [],
        isLoading: false,
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
