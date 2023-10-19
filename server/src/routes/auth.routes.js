const authController = require("../controllers/auth.controller");

const loginOpts = {
  schema: {
    body: {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
      },
      required: ["username", "password"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          _id: { type: "string" },
          username: { type: "string" },
          email: { type: "string", format: "email" },
          profilePictureURL: { type: "string" },
        },
      },
    },
  },
};

async function routes(fastify, options) {
  fastify.post("/login", loginOpts, authController.login);
}

module.exports = routes;
