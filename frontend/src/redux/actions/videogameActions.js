import axios from 'axios';

const URL = process.env.REACT_APP_URL;
const DB_KEY = process.env.REACT_APP_DB_KEY;

console.log('Environment Variables:', { URL, DB_KEY });

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';

const MAX_ITEMS = 15;

export function getVideogames(limit = MAX_ITEMS) {
  return async function (dispatch) {
    try {
      const fetchPage = async (page) => {
        const requestUrl = `${URL}?key=${DB_KEY}&page_size=40&page=${page}`;
        console.log(`Fetching page ${page} with URL: ${requestUrl}`);
        const response = await axios.get(requestUrl);
        console.log('Data fetched for page', page, response.data);
        return response.data.results || [];
      };

      const results = await Promise.all([fetchPage(1), fetchPage(2)]);
      let allResults = [].concat(...results).slice(0, MAX_ITEMS);

      const formattedResults = allResults.map(game => ({
        id: game.id,
        name: game.name,
        rating: game.rating,
        genres: game.genres.map(genre => genre.name).join(', '),
        platforms: game.platforms.map(platform => platform.platform.name).join(', '),
        image: game.background_image,
        released: game.released,
      }));

      console.log('Formatted Results:', formattedResults);

      dispatch({
        type: GET_VIDEOGAMES,
        payload: formattedResults,
      });
    } catch (error) {
      console.error('Error fetching videogames:', error);
    }
  };
}

export function getVideogameByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}?search=${name}&key=${DB_KEY}`);
      const results = response.data.results;

      dispatch({
        type: GET_BY_NAME,
        payload: results,
      });
    } catch (error) {
      console.error('Error fetching videogame by name:', error);
    }
  };
}

export function getVideogameDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/${id}?key=${DB_KEY}`);
      const videogame = response.data;

      dispatch({
        type: GET_DETAIL,
        payload: videogame,
      });
    } catch (error) {
      console.error('Error fetching videogame detail:', error);
    }
  };
}
