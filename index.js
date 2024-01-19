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

const path = require("path");

console.log(__dirname + "/" + "data.js");
console.log(path.join(__dirname, "data.js"));
