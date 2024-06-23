const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Videogame = sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    apiId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_original: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    released: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tba: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    background_image_additional: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rating_top: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ratings: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    added: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    playtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    screenshots_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    movies_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    creators_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    achievements_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    parent_achievements_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reddit_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reddit_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reddit_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    reddit_logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reddit_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    twitch_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    youtube_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reviews_text_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ratings_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    suggestions_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    metacritic_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additions_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    game_series_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    saturated_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dominant_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    stores: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    genres: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    tags: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  });

  console.log('Videogame model defined');
  return Videogame;
};
