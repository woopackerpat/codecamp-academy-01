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

// lab1
app.get("/", (req, res) => {
  res.json({ title: "My First Web App", message: "Our Web App API" });
});

// lab2
app.get("/post", (req, res) => {
  //   console.log(req.method);
  const method = req.method;
  res.json({ message: method + " " + "products" });
});
app.post("/post", (req, res) => {
  //   console.log(req.method);
  const method = req.method;
  res.json({ message: method + " " + "products" });
});
app.put("/post", (req, res) => {
  //   console.log(req.method);
  const method = req.method;
  res.json({ message: method + " " + "products" });
});
app.patch("/post", (req, res) => {
  //   console.log(req.method);
  const method = req.method;
  res.json({ message: method + " " + "products" });
});
app.delete("/post", (req, res) => {
  //   console.log(req.method);
  const method = req.method;
  res.json({ message: method + " " + "products" });
});

app.get("/redirect", (req, res) => {
    res.redirect("https://google.com")
})

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});
