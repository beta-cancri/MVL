import { combineReducers } from 'redux';
import userReducer from './userReducer';
import videogameReducer from './videogameReducer';

const rootReducer = combineReducers({
  user: userReducer,
  videogame: videogameReducer,
});

export default rootReducer;
