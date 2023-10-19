const userController = require("../controllers/user.controller");
const { basicAuth } = require("../middlewares/auth");

const createUserOpts = {
  schema: {
    body: {
      type: "object",
      properties: {
        username: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string" },
        profilePictureURL: { type: "string" },
      },
      required: ["username", "email", "password"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          _id: {type: "string"},
          username: { type: "string" },
          email: { type: "string", format: "email" },
          profilePictureURL: { type: "string" },
        },
      },
    },
  },
  preHandler: basicAuth,
};

async function routes(fastify, options) {
  fastify.get("/", userController.getAllUsers);
  fastify.post("/", createUserOpts, userController.createUser);
  fastify.get("/:id", userController.getUserById);
  fastify.put("/:id", userController.updateUser);
  fastify.delete("/:id", userController.deleteUser);
}

module.exports = routes;
