import axios from 'axios';

export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const fetchGenres = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/genres');
    dispatch({ type: FETCH_GENRES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching genres:', error);
    dispatch({ type: FETCH_GENRES_FAILURE, error });
  }
};
