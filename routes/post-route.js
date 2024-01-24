const express = require("express");

const router = express.Router();

router.get("/", () => {});
router.get("/:postId", () => {});
router.post("/", () => {});
router.update("/:postId", () => {});
router.delete("/:postId", () => {});

module.exports = router;
