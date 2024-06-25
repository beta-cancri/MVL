import axios from 'axios';

export const FETCH_PLATFORMS_SUCCESS = 'FETCH_PLATFORMS_SUCCESS';
export const FETCH_PLATFORMS_FAILURE = 'FETCH_PLATFORMS_FAILURE';

export const fetchPlatforms = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/platforms');
    dispatch({ type: FETCH_PLATFORMS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching platforms:', error);
    dispatch({ type: FETCH_PLATFORMS_FAILURE, error });
  }
};
