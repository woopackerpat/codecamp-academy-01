const prisma = require("../config/prisma");
const createError = require("../utils/createError");
exports.getAllPosts = async (req, res, next) => {
  res.json({ message: "Get all posts" });
};

exports.getPostById = async (req, res, next) => {
  try {
    const { postId } = req.params;

    if (isNaN(Number(postId))) {
      return createError(400, "Post id should be number");
    }

    const post = await prisma.post.findFirst({
      where: {
        id: Number(postId),
      },
    });

    if (!post) {
      return createError(400, "Post not found");
    }

    res.json({ post });
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, published, authorId } = req.body;

    if (!title || !authorId) {
      return createError(400, "Invalid data");
    }

    if (typeof published !== "boolean") {
      return createError(400, "Publish data should boolean");
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        published,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });

    res.json({ post: newPost });
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  res.json({ message: "Update Post" });
};

exports.deletPost = async (req, res, next) => {
  res.json({ message: "Delete Post" });
};
