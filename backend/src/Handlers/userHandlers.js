const { createUser, getUserById, searchUserByName } = require('../controllers/userControllers');

const createUserHandler = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const newUser = await createUser(username, password, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send('Error registering new user: ' + error.message);
  }
};

const getUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send('Error fetching user: ' + error.message);
  }
};

const searchUserHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const users = await searchUserByName(name);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Error searching users: ' + error.message);
  }
};

module.exports = {
  createUserHandler,
  getUserHandler,
  searchUserHandler,
};
