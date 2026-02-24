// node JS-Tutorial\07-functions\c-parameters.js

function multiply(first, second) {
  // first and second are parameters
  return first * second;
}
console.log(multiply(4, 5)); // 20 => 4 and 5 are arguments NOT parameters
let a = multiply(4, 5);
console.log(a); // 20

// default value
function myFunction(a, b = "World") {
  return a + " " + b;
}
console.log(myFunction()); // "undefined World"
console.log(myFunction("Hello")); // "Hello World"
console.log(myFunction("Hi", "Worlds")); // "Hi Worlds"

// Default value on first parameter
function myFunction2(b = "World", a) {
  return a + " " + b;
}
console.log(myFunction2("Hello")); // "undefined Hello"
/* console.log(myFunction2(,"Hello")); // SyntaxError */
