const { UserVideogame, Videogame, User } = require('../db');

const addOrUpdateUserVideogame = async (userId, gameId, status, isFavorite) => {
  try {
    let userVideogame = await UserVideogame.findOne({
      where: { UserId: userId, VideogameId: gameId }
    });

    if (userVideogame) {
      userVideogame.status = status || userVideogame.status;
      userVideogame.isFavorite = isFavorite !== undefined ? isFavorite : userVideogame.isFavorite;
      await userVideogame.save();
    } else {
      userVideogame = await UserVideogame.create({
        UserId: userId,
        VideogameId: gameId,
        status: status || 'planned to play',
        isFavorite: isFavorite !== undefined ? isFavorite : false,
      });
    }

    return userVideogame;
  } catch (error) {
    throw error;
  }
};

const removeFavorite = async (userId, gameId) => {
  try {
    const result = await UserVideogame.destroy({
      where: {
        UserId: userId,
        VideogameId: gameId,
        isFavorite: true,
      },
    });

    if (result > 0) {
      return 'Game removed from favorites';
    } else {
      throw new Error('Favorite game not found');
    }
  } catch (error) {
    throw error;
  }
};

const getFavorites = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Videogame,
        through: {
          where: {
            isFavorite: true,
          },
        },
      },
    });

    if (user) {
      return user.Videogames;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
};

const getStatusGames = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Videogame,
        through: {
          where: {
            status: {
              [Sequelize.Op.ne]: null,
            },
          },
        },
      },
    });

    if (user) {
      return user.Videogames;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addOrUpdateUserVideogame,
  removeFavorite,
  getFavorites,
  getStatusGames,
};
