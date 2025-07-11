const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Time expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading cb");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("Process.nextTick cb");
});
console.log("Last Line of the file");
