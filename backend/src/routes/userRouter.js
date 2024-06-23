const { Router } = require('express');
const { createUserHandler, getUserHandler, searchUserHandler } = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.post('/register', createUserHandler);
userRouter.get('/:id', getUserHandler);
userRouter.get('/', searchUserHandler);

module.exports = userRouter;
