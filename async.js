const fs = require("fs");
const https = require("https");

console.log("hello world");

var a = 1078698;
var b = 20986;

// take 100 to 200 milli seconds
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

// take 5 seconds
setTimeout(() => {
  console.log("setTimout called after 5 seconds");
}, 5000);

// takes 5 to 10 milliseonds b/c of small file

// sync function it block the mainthread
fs.readFileSync("./file.txt", "utf-8"); // 100ms then code is still for that moment
console.log("This will only execute only after file read");
// async function
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data :", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is", c);

// execution order

// hello world
// Multiplication result is
// File Data : This is the file data
// Fetched Data Successfully
// setTimout called after 5 seconds
