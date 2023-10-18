const categoryController = require("../controllers/category.controller");

async function routes(fastify, options) {
  fastify.post("/", categoryController.createCategory);
  fastify.get("/", categoryController.getAllCategories);
  fastify.get("/:id", categoryController.getCategoryById);
  fastify.put("/:id", categoryController.updateCategory);
  fastify.delete("/:id", categoryController.deleteCategory);
}

module.exports = routes;
