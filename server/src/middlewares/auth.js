require("dotenv").config();
const User = require("../models/user.model");

async function apiKeyAuth(request, reply) {
  const apiKey = request.headers["x-api-key"];
  const knownKey = process.env.APIKEY;

  if (!apiKey || apiKey !== knownKey) {
    return reply.code(401).send({ error: "Unauthorized" });
  }
}

async function basicAuth(request, reply) {
  const authHeader = request.headers["authorization"];

  if (!authHeader) {
    return reply.code(401).send({ error: "No authorization header" });
  }

  const [authType, authKey] = authHeader.split(" ");

  if (authType !== "Basic") {
    return reply
      .code(401)
      .send({ error: "Required basic authorization (username/password)" });
  }

  const [username, password] = Buffer.from(authKey, "base64")
    .toString("ascii")
    .split(":");

  try {
    const user = await User.findOne({ username }).select("password");

    if (!user) {
      return reply.code(401).send({ error: "User not found" });
    }

    if (!(await user.comparePassword(password))) {
      return reply.code(401).send({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    return reply
      .code(500)
      .send({ error: "An error occurred during authorization" });
  }
}
module.exports = { apiKeyAuth, basicAuth };
