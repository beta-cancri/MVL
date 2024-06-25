import { FETCH_PLATFORMS_SUCCESS, FETCH_PLATFORMS_FAILURE } from '../actions/platformActions';

const initialState = {
  platforms: [],
  error: null,
};

const platformReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLATFORMS_SUCCESS:
      return {
        ...state,
        platforms: action.payload,
      };
    case FETCH_PLATFORMS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default platformReducer;
