exports.getAllPosts = async (req, res, next) => {
  res.json({ message: "Get all posts" });
};

exports.getPostById = async (req, res, next) => {
  res.json({ message: "Get Post By Id" });
};

exports.createPost = async (req, res, next) => {
  res.json({ message: "Create post" });
};

exports.updatePost = async (req, res, next) => {
  res.json({ message: "Update Post" });
};

exports.deletPost = async (req, res, next) => {
  res.json({ message: "Delete Post" });
};
