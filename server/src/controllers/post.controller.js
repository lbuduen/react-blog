const Post = require("../models/post.model");

async function createPost(request, reply) {
  try {
    const post = new Post(request.body);
    const res = await post.save();
    return reply.send(res);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function getAllPosts(request, reply) {
  try {
    const posts = await Post.find()
      .populate("username", "username email")
      .populate("categories", "name");
    return reply.send(posts);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function getPostById(request, reply) {
  try {
    const post = await Post.findById(request.params.id)
      .populate("username", "username email")
      .populate("categories", "name");
    if (!post) {
      reply.status(404).send({ message: "Post with that id not found" });
    }
    return reply.send(post);
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function deletePost(request, reply) {
  try {
    await Post.findByIdAndDelete(request.params.id);
    return reply.status(204).send();
  } catch (error) {
    reply.status(500).send(error);
  }
}

async function updatePost(request, reply) {
  try {
    const post = await Post.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    })
      .populate("username", "username email")
      .populate("categories", "name");
    return reply.send(post);
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
};
