console.log("hello world");

var a = 1078698;
var b = 20986;

// wait for 0 seconds and execute me

// it is async operation and foes to libuv and libuv only get this call back method to be called once the call stack is empty, once the call stack is finished executing all the code whether it is zero milliseconds whatever it is
// only the main thread is empty after that zero seconds
setTimeout(() => {
  console.log("call me right now ASAP"); // trust issues with setTimeout b/c it actually doesnot run after zero milliseconds it only runs after zero seconds when call stack is empty
}, 0);

// take 3 seconds

setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}
var c = multiplyFn(a, b);
console.log("Multiplication result is", c);
