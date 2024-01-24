require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth-route");
const postRoute = require("./routes/post-route");

const errorHandler = require("./middlewares/error");

const app = express();

app.use(express.json());

app.use("/auth", authRoute);
app.use("/post", postRoute);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server run on port 8000");
});
