const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading cb");
});

setTimeout(() => console.log("Time expired"), 0);

process.nextTick(() => console.log("Process.nextTick cb"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last Line of the file");
