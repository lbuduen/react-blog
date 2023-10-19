const path = require("node:path");
const multer = require("fastify-multer");

const postController = require("../controllers/post.controller");

async function routes(fastify, options) {
  fastify.register(multer.contentParser);

  const upload = multer({
    dest: path.join(__dirname, "../../uploads/"),
  });

  fastify.post("/", postController.createPost);
  fastify.get("/", postController.getAllPosts);
  fastify.get("/:id", postController.getPostById);
  fastify.put("/:id", postController.updatePost);
  fastify.delete("/:id", postController.deletePost);
  fastify.post(
    "/picture",
    { preHandler: upload.single("postPicture") },
    postController.uploadPostPicture
  );
}

module.exports = routes;
