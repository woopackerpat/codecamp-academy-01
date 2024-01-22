const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Get products" });
});
router.get("/:id", (req, res, next) => {
  res.json({ message: "Get product by id" });
});
router.post("/", (req, res, next) => {
  res.json({ message: "Create product" });
});
router.put("/:id", (req, res, next) => {
  res.json({});
});
router.delete("/:id", (req, res, next) => {
  res.json({});
});

module.exports = router;
