const postController = require("../controllers/post.controller");

async function routes(fastify, options) {
  fastify.post("/", postController.createPost);
  fastify.get("/", postController.getAllPosts);
  fastify.get("/:id", postController.getPostById);
  fastify.put("/:id", postController.updatePost);
  fastify.delete("/:id", postController.deletePost);
}

module.exports = routes;