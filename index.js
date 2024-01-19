// const obj = require("./data")

// console.log(obj)

// const { a, testFunc } = require("./data");

// console.log(a);
// console.log(testFunc);

// const helloFunc = require("./data");

// console.log(helloFunc());

// const { testFunc } = require("./data");
// testFunc();

// console.log(__dirname)
// console.log(__filename)

// const path = require("path");

// console.log(__dirname + "/" + "data.js");
// console.log(path.join(__dirname, "data.js"));

const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "hello.txt"),
  { encoding: "utf-8" },
  (err, data) => {
    console.log(data);
  }
);
