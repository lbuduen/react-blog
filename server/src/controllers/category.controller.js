const Category = require("../models/category.model");

async function createCategory(request, reply) {
  try {
    const cat = new Category(request.body);
    const res = await cat.save();
    return reply.send(res);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function getAllCategories(request, reply) {
  try {
    const cats = await Category.find();
    return reply.send(cats);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function getCategoryById(request, reply) {
  try {
    const cat = await Category.findById(request.params.id);
    if (!cat) {
      reply.status(404).send({ message: "Category with that id not found" });
    }
    return reply.send(cat);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function deleteCategory(request, reply) {
  try {
    await Category.findByIdAndDelete(request.params.id);
    return reply.status(204).send();
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function updateCategory(request, reply) {
  try {
    const cat = await Category.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    return reply.send(cat);
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
};
