const express = require("express");
const postController = require("../controllers/post-controller");

const router = express.Router();

router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPostById);
router.post("/", postController.createPost);
router.put("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletPost);

module.exports = router;
