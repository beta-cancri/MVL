import { combineReducers } from 'redux';
import userReducer from './userReducer';
import videogameReducer from './videogameReducer';
import genreReducer from './genreReducer';
import platformReducer from './platformReducer';

const rootReducer = combineReducers({
  user: userReducer,
  videogame: videogameReducer,
  genres: genreReducer,
  platforms: platformReducer,
});

export default rootReducer;
