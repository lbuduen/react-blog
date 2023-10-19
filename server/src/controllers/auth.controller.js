const User = require("../models/user.model");

async function login(request, reply) {
  const { username, password } = request.body;

  try {
    const user = await User.findOne({ username }).select("password");
    if (!user) {
      return reply.code(401).send({ error: "User not found" });
    }

    if (!(await user.comparePassword(password))) {
      return reply.code(401).send({ error: "Invalid password" });
    }
    return reply.send(user);
  } catch (error) {
    console.error(error);
    return reply.code(500).send({ error: "An error occurred during login" });
  }
}

module.exports = {
  login,
};
