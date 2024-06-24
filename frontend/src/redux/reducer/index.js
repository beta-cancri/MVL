import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import other reducers as needed

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers
});

export default rootReducer;
