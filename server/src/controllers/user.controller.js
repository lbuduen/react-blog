const User = require("../models/user.model");
const bcrypt = require("bcrypt");

async function getAllUsers(request, reply) {
  try {
    const users = await User.find();
    return reply.send(users);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function getUserById(request, reply) {
  try {
    const user = await User.findById(request.params.id);
    return reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function createUser(request, reply) {
  try {
    const user = new User(request.body);
    const res = await user.save();
    return reply.send(res);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function updateUser(request, reply) {
  try {
    if (request.body.password) {
      const saltRounds = 10;
      request.body.password = await bcrypt.hash(user.password, saltRounds);
    }
    const user = await User.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    return reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function deleteUser(request, reply) {
  try {
    await User.findByIdAndDelete(request.params.id);
    return reply.status(204).send();
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
