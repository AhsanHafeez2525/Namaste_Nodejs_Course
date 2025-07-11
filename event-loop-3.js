const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Time expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);
  process.nextTick(() => console.log("2nd nexttick"));
  setImmediate(() => console.log("2nd setImmediate"));
  console.log("file reading cb");
});

process.nextTick(() => console.log("Process.nextTick cb"));
console.log("Last Line of the file");
