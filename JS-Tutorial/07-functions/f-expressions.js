// node JS-Tutorial\07-functions\f-expressions.js

// Anonymous functions
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20

function myFunction() {
  return "Hello World";
}
let a = myFunction;
console.log(a());

// Functions stored in variables
function run(fn) {
  return fn();
}
const sayHello = function () {
  return "Hello";
};
console.log(run(sayHello)); // "Hello"

// Hoisting
// ============================================================================= //

// Function declaration
console.log(myFunction2()); // "Hello World!!!" - hoisting works!
function myFunction2() {
  return "Hello World!!!";
}

// Function expressions
/* console.log(myFunction3()); // Error - Cannot access before initialization */
const myFunction3 = function () {
  return "Hello World!!!";
};
