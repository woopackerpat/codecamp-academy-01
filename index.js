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

// const fs = require("fs");
// const path = require("path");

// fs.readFile(
//   path.join(__dirname, "hello.txt"),
//   { encoding: "utf-8" },
//   (err, data) => {
//     // console.log(data);
//     fs.writeFile("hello2.txt",data,() => {
//         console.log("Done writeFile")
//     })
//   }
// );

// const fs = require("fs/promises");
// const path = require("path");

// const run = async () => {
//   const data = await fs.readFile(path.join(__dirname, "hello.txt"), {
//     encoding: "utf-8",
//   });

//   console.log(data);
// };

// run();

const http = require("http");

const server = http.createServer((req, res) => {});

server.listen("8000", () => {
  console.log("Server is running on port 8000");
});
