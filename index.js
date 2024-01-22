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

const express = require("express");

const app = express();

// app.get("/product/price/:price/discount/:discount", (req, res, next) => {
//   const { price, discount } = req.params;

//   res.json({ price, discount });
// });

app.get("/sum/:a/:b", (req, res, next) => {
  const { a, b } = req.params;
  res.json({ a, b });
});

app.post("/products/:id", (req, res, next) => {
  const { id } = req.params;
  res.json({ id });
});

app.get("/users/:id/bookings/:bId", (req, res, next) => {
  const { id, bId } = req.params;
  res.json({ id, bId });
});

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});
