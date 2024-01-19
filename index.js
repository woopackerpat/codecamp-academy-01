// const a = [1, 2, 3, 4, 5];

// console.log("test1");
// const b = a.map((el) => el * 2);

// console.log(b);

// console.log("test2");

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world");
  }, 2000);
});

console.log("test1");
testPromise.then((res) => console.log(res));
console.log("test2");
