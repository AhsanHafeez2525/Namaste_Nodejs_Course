const crypto = require("crypto");

console.log("hello world");

var a = 1078698;
var b = 20986;
// sync function it does not have callback
// block the main thread
// don't use it sync methods
// haha sync function exist b/c how to see main thread block
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first key is generated");
// 500000 is iteration means how much more complex to make your password key
// 50 is the number of key length
// password base key derivative function
setTimeout(() => {
  console.log("call me right now ASAP"); // trust issues with setTimeout b/c it actually doesnot run after zero milliseconds it only runs after zero seconds when call stack is empty
}, 0); // it will only be called once main thread or call stack is empty
// async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  // salt for encryption
  console.log("Second Key is generated");
});
function multiplyFn(x, y) {
  const result = a * b;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is", c);
