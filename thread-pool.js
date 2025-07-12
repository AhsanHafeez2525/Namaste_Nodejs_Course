const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2;

//  On Linux/macOS:

// UV_THREADPOOL_SIZE=2 node thread-pool.js

// On Windows (CMD):

// set UV_THREADPOOL_SIZE=2 && node thread-pool.js

// On Windows (PowerShell):

// $env:UV_THREADPOOL_SIZE=2; node thread-pool.js

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1- crypt pbkdf2 done");
});

// fs.readFile("./file.txt", "utf-8", () => {
//   console.log("file reading cb");
// });

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2- crypt pbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3- crypt pbkdf2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4- crypt pbkdf2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5- crypt pbkdf2 done");
});
