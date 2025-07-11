const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading cb");
});

setTimeout(() => console.log("Time expired"), 0);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last Line of the file");
