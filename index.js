const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Hello");
  res.json({message: "Hello"})
});

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});
