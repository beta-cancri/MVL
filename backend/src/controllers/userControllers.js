const bcrypt = require('bcrypt');
const { User } = require('../db');

const createUser = async (username, password, email) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const searchUserByName = async (name) => {
  try {
    const users = await User.findAll({
      where: { username: { [Op.iLike]: `%${name}%` } },
    });
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getUserById, searchUserByName };
