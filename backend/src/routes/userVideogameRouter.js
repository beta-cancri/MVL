const { Router } = require('express');
const {
  addOrUpdateUserVideogameHandler,
  removeFavoriteHandler,
  getFavoritesHandler,
  getStatusGamesHandler
} = require('../handlers/userVideogameHandlers');

const userVideogameRouter = Router();

userVideogameRouter.post('/:userId/videogames/:gameId', addOrUpdateUserVideogameHandler);
userVideogameRouter.delete('/:userId/videogames/:gameId', removeFavoriteHandler);
userVideogameRouter.get('/:userId/favorites', getFavoritesHandler);
userVideogameRouter.get('/:userId/status', getStatusGamesHandler);

module.exports = userVideogameRouter;
