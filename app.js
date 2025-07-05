import("./xyz.js"); // call one module to another
var name = "ahsan satti";
// es module
// import { calculateMultiply } from "./calculate/multiply.js";
// import { calculateSum } from "./calculate/sum.js";
// common js module
// const { calculateSum } = require("./calculate/sum.js");
// const {calculateMultiply} = require("./calculate/multiply.js")
// one folder module
const { calculateSum, calculateMultiply } = require("./calculate");
// import json file
const data = require("./data.json");
// var a = 10;
// var b = 20;
console.log(name);
// console.log(a);
// console.log(b);
// console.log(globalThis);
// console.log(this); // empty object
// console.log(global);
// console.log(globalThis === global);

// const calculateSum = import("./sum.js"); // CommonJS require

var a = 10;
var b = 20;
calculateSum(a, b);
var c = 10;
var d = 20;
calculateMultiply(c, d);
console.log(data);
