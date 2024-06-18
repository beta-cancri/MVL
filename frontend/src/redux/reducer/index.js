import { combineReducers } from 'redux';

// Example reducer (you can replace this with your actual reducers)
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
  // Add your other reducers here
});

export default rootReducer;
