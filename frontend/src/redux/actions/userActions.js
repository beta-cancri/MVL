import axios from 'axios';

export const SET_USER = 'SET_USER';
export const SET_FAVORITES = 'SET_FAVORITES';
export const SET_GAME_LIST = 'SET_GAME_LIST';
export const DELETE_USER = 'DELETE_USER';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites,
});

export const setGameList = (gameList) => ({
  type: SET_GAME_LIST,
  payload: gameList,
});

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/${userId}`);
    dispatch({ type: DELETE_USER, payload: userId });
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
