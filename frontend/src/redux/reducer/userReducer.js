const initialState = {
  user: null,
  favorites: [],
  gameList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };
    case 'SET_GAME_LIST':
      return {
        ...state,
        gameList: action.payload,
      };
    // other cases
    default:
      return state;
  }
};

export default userReducer;
