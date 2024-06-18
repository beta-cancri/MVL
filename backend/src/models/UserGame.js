// models/UserGame.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Game = require('./Game');

const UserGame = sequelize.define('UserGame', {
  status: {
    type: DataTypes.STRING, // On hold, Finished, Dropped, Currently Playing
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

User.belongsToMany(Game, { through: UserGame });
Game.belongsToMany(User, { through: UserGame });

module.exports = UserGame;
