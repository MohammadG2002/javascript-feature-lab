// node JS-Tutorial\07-functions\e-arguments.js

// arguments object
function myFunction() {
  return arguments.length;
}
console.log(myFunction(1, 2, 3)); // 3

function myFunction2() {
  return arguments[1];
}
console.log(myFunction2(1, 2, 3)); // 2

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius("John")); // NaN

// assign value for undefined arguments
function myFunction3(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x + y;
}
console.log(myFunction3(1)); // 3

// argument with default value
function myFunction4(x, y = 2) {
  return x + y;
}
console.log(myFunction4(1)); // 3

// first argument with default value
function myFunction5(x = 1, y) {
  return x + y;
}
console.log(myFunction5(undefined, 2)); // 3

// rest parameters
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sum(4, 9, 16, 25, 29, 100, 66, 77)); // 326
