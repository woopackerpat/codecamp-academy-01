const express = require("express");
const postController = require("../controllers/post-controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPostById);
router.post("/", authenticate, postController.createPost);
router.put("/:postId", authenticate, postController.updatePost);
router.delete("/:postId", authenticate, postController.deletPost);

module.exports = router;
