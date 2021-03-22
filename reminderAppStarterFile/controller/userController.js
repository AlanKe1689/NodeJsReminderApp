const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user;

  try {
    user = userModel.findOne(email);
  } catch (err) {
    user = null;
  }

  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }

  return null;
};

const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
};

function isUserValid(user, password) {
  return user.password === password;
}

function createUser(profile) {
  return userModel.createUser(profile);
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  createUser,
};
