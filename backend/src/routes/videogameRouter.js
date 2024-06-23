const { Router } = require('express');
const { getDetailHandler, getVideogameHandler } = require('../handlers/videogameHandlers');

const videogameRouter = Router();

videogameRouter.get('/', getVideogameHandler);
videogameRouter.get('/:id', getDetailHandler);

module.exports = videogameRouter;
