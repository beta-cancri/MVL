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

const deleteUser = async (id) => {
  try {
    const result = await User.destroy({
      where: { id }
    });
    return result; 
  } catch (error) {
    throw error;
  }
};

const loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid password');

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getUserById, searchUserByName, deleteUser, loginUser };
