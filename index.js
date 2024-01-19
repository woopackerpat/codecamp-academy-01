const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("Hello");
//   res.json({message: "Hello"})
// });

// app.get("/", (req, res) => {
//   res.json({ message: "GET" });
// });
// app.post("/", (req, res) => {});
// app.put("/", (req, res) => {});
// app.patch("/", (req, res) => {});
// app.delete("/", (req, res) => {});

app.get("/", (req, res) => {
  res.json({ title: "My First Web App", message: "Our Web App API" });
});

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});
