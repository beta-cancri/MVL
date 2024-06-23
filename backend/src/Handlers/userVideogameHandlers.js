const {
  addOrUpdateUserVideogame,
  removeFavorite,
  getFavorites,
  getStatusGames
} = require('../controllers/userVideogameControllers');

const addOrUpdateUserVideogameHandler = async (req, res) => {
  const { userId, gameId } = req.params;
  const { status, isFavorite } = req.body;

  try {
    const userVideogame = await addOrUpdateUserVideogame(userId, gameId, status, isFavorite);
    res.status(200).json(userVideogame);
  } catch (error) {
    res.status(500).send('Error updating user-videogame relationship: ' + error.message);
  }
};

const removeFavoriteHandler = async (req, res) => {
  const { userId, gameId } = req.params;

  try {
    const result = await removeFavorite(userId, gameId);
    res.status(200).send('Game removed from favorites');
  } catch (error) {
    res.status(500).send('Error removing game from favorites: ' + error.message);
  }
};

const getFavoritesHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const favorites = await getFavorites(userId);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).send('Error fetching favorite games: ' + error.message);
  }
};

const getStatusGamesHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const statusGames = await getStatusGames(userId);
    res.status(200).json(statusGames);
  } catch (error) {
    res.status(500).send('Error fetching games with status: ' + error.message);
  }
};

module.exports = {
  addOrUpdateUserVideogameHandler,
  removeFavoriteHandler,
  getFavoritesHandler,
  getStatusGamesHandler,
};
