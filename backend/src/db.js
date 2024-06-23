require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Read all files from the Models directory, require them, and add them to the modelDefiners array
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, '/models', file));
    modelDefiners.push(modelDefiner);
  });

// Inject the connection (sequelize) to all models
modelDefiners.forEach(modelDefiner => modelDefiner(sequelize));

// Capitalize model names: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map(([name, model]) => [name[0].toUpperCase() + name.slice(1), model]);
sequelize.models = Object.fromEntries(capsEntries);

// Check which models are loaded
console.log('Loaded models:', Object.keys(sequelize.models));

// In sequelize.models are all imported models as properties
// To relate them we destructure them
const { Videogame, User, UserVideogame } = sequelize.models;

if (Videogame && User && UserVideogame) {
  // Define relationships
  Videogame.belongsToMany(User, { through: UserVideogame });
  User.belongsToMany(Videogame, { through: UserVideogame });

  console.log('Videogame and User belongToMany associations defined');

  User.hasMany(UserVideogame);
  UserVideogame.belongsTo(User);
  Videogame.hasMany(UserVideogame);
  UserVideogame.belongsTo(Videogame);

  console.log('All associations defined');
} else {
  console.error('Error: One or more models are not properly loaded');
}

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
