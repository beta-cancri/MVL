const axios = require('axios');
const { Videogame } = require('../db');
const { URL, DB_KEY } = process.env;
const { Op } = require('sequelize');

const getVideogameById = async (id, source) => {
    try {
        const videogame = source === 'api'
            ? (await axios.get(`${URL}/${id}?key=${DB_KEY}`)).data
            : await Videogame.findByPk(id);

        if (!videogame) {
            throw new Error('Videogame not found');
        }

        return source === 'api' ? videogame : {
            id: videogame.id,
            name: videogame.name,
            description: videogame.description,
            platforms: videogame.platforms,
            image: videogame.image,
            released: videogame.released,
            rating: videogame.rating,
            genres: videogame.genres,
        };
    } catch (error) {
        throw error;
    }
};

const getAllVideogames = async () => {
    try {
        const videogameDB = await Videogame.findAll();
        const response = await axios.get(`${URL}?key=${DB_KEY}`);
        const videogameApi = response.data.results || [];
        return [...videogameDB, ...videogameApi];
    } catch (error) {
        throw error;
    }
};

const getVideogameByName = async (name) => {
    try {
        const apiUrl = `${URL}?search=${encodeURIComponent(name)}&key=${DB_KEY}`;
        const apiResponse = await axios.get(apiUrl);
        const videogameApi = apiResponse.data.results || [];

        const dbResults = await Videogame.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } }
        });

        const combinedResults = [...videogameApi, ...dbResults];
        const exactMatches = combinedResults.filter(game => game.name.toLowerCase() === name.toLowerCase());
        const approximateMatches = combinedResults.filter(game => game.name.toLowerCase() !== name.toLowerCase() && game.name.toLowerCase().includes(name.toLowerCase()));

        return [...exactMatches, ...approximateMatches].sort((a, b) => b.rating - a.rating);
    } catch (error) {
        throw error;
    }
};

module.exports = { getVideogameById, getAllVideogames, getVideogameByName };
