// models/Game.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Game = sequelize.define('Game', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: DataTypes.STRING,
  description: DataTypes.TEXT,
  released: DataTypes.DATE,
  background_image: DataTypes.STRING,
  website: DataTypes.STRING,
  rating: DataTypes.FLOAT,
  // Add more fields as needed
});

module.exports = Game;
