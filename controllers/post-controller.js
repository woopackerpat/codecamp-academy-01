const prisma = require("../config/prisma");
const createError = require("../utils/createError");
exports.getAllPosts = async (req, res, next) => {
  try {
    console.log(req.user);
    const { search } = req.query;

    const posts = await prisma.post.findMany({
      where: {
        title: search,
      },
      take: 3,
      //   orderBy: {
      //     id: "desc"
      //   }
    });

    if (posts.length <= 0) {
      return createError(400, "Post not found");
    }

    res.json({ posts });
  } catch (err) {
    next(err);
  }
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
    const { title, published } = req.body;

    if (!title) {
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
            id: req.user.id,
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
  try {
    const { postId } = req.params;
    const { title, published } = req.body;

    const post = await prisma.post.findFirst({
      where: {
        id: Number(postId),
      },
    });

    if (!post) {
      return createError(400, "Post not found");
    }

    if (req.user.id !== post.authorId) {
      return createError(403, "Forbidden");
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        title,
        published,
      },
    });

    res.json({ post: updatedPost });
  } catch (err) {
    next(err);
  }
};

exports.deletPost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    if (!postId) {
      return createError(400, "Post id to be provided");
    }

    const post = await prisma.post.findFirst({
      where: {
        id: Number(postId),
      },
    });

    if (!post) {
      return createError(400, "Post not found");
    }

    if (req.user.id !== post.authorId) {
      return createError(403, "Forbidden");
    }

    await prisma.post.delete({
      where: {
        id: post.id,
      },
    });

    res.status(204).json({ message: "Delete Post" });
  } catch (err) {
    next(err);
  }
};
