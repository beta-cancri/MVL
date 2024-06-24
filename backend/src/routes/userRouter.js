const { Router } = require('express');
const { createUserHandler, getUserHandler, searchUserHandler, deleteUserHandler } = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.post('/register', createUserHandler);
userRouter.get('/:id', getUserHandler);
userRouter.get('/', searchUserHandler);
userRouter.delete('/:id', deleteUserHandler);

module.exports = userRouter;
