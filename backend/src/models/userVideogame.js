const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserVideogame = sequelize.define('UserVideogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM('planned to play', 'playing', 'finished', 'dropped', 'on hold'),
      allowNull: false,
    },
    isFavorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });
  console.log('UserVideogame model defined');
  return UserVideogame;
};
