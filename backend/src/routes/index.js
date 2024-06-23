const { Router } = require('express');
const videogameRouter = require('./videogameRouter');
const userRouter = require('./userRouter');
const userVideogameRouter = require('./userVideogameRouter');

const mainRouter = Router();

mainRouter.use('/videogame', videogameRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/user-videogame', userVideogameRouter);

module.exports = mainRouter;
