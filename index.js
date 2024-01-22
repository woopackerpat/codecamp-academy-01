// const express = require("express");

// const app = express();

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
// app.get("/", (req, res) => {
//   res.json({ title: "My First Web App", message: "Our Web App API" });
// });

// // lab2
// app.get("/post", (req, res) => {
//   //   console.log(req.method);
//   const method = req.method;
//   res.json({ message: method + " " + "products" });
// });
// app.post("/post", (req, res) => {
//   //   console.log(req.method);
//   const method = req.method;
//   res.json({ message: method + " " + "products" });
// });
// app.put("/post", (req, res) => {
//   //   console.log(req.method);
//   const method = req.method;
//   res.json({ message: method + " " + "products" });
// });
// app.patch("/post", (req, res) => {
//   //   console.log(req.method);
//   const method = req.method;
//   res.json({ message: method + " " + "products" });
// });
// app.delete("/post", (req, res) => {
//   //   console.log(req.method);
//   const method = req.method;
//   res.json({ message: method + " " + "products" });
// });

// app.get("/redirect", (req, res) => {
//     res.redirect("https://google.com")
// })

// const express = require("express");

// const app = express();

// app.get("/product/price/:price/discount/:discount", (req, res, next) => {
//   const { price, discount } = req.params;

//   res.json({ price, discount });
// });

// lab1
// app.get("/sum/:a/:b", (req, res, next) => {
//   const { a, b } = req.params;
//   res.json({ a, b });
// });

// app.post("/products/:id", (req, res, next) => {
//   const { id } = req.params;
//   res.json({ id });
// });

// app.get("/users/:id/bookings/:bId", (req, res, next) => {
//   const { id, bId } = req.params;
//   res.json({ id, bId });
// });

// lab2

// app.patch("/post/:postId", (req, res, next) => {
//   const { postId } = req.params;

//   res.json({ postId });
// });

// app.delete("/post/:postId", (req, res, next) => {
//   const { postId } = req.params;

//   res.json({ postId });
// });

// app.get("/post/:postId", (req, res, next) => {
//   const { postId } = req.params;
//   res.json({ postId });
// });

// app.get("/auth/:userId", (req, res, next) => {
//   const { userId } = req.params;

//   res.json({ userId });
// });

// query string

// app.get("/product", (req, res, next) => {
//   const { order, page, limit } = req.query;

//   res.json({ order, page, limit });
// });

const express = require("express");
const app = express();

// const bodyMiddleware = express.json();

app.use(express.json());

app.get("/product", (req, res, next) => {
  // console.log(req.body);

  const { username, password } = req.body;

  res.json({ username, password });
});

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});
