const { Router } = require('express');
const videogameRouter = require('./videogameRouter');
const userRouter = require('./userRouter');
const userVideogameRouter = require('./userVideogameRouter');
const genreRouter = require('./genreRouter');  // Add this line
const platformRouter = require('./platformRouter');  // Add this line

const mainRouter = Router();

mainRouter.use('/videogame', videogameRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/user-videogame', userVideogameRouter);
mainRouter.use('/genres', genreRouter);  // Add this line
mainRouter.use('/platforms', platformRouter);  // Add this line

module.exports = mainRouter;
