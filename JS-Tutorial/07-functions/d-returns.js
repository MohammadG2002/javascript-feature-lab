// node JS-Tutorial\07-functions\d-returns.js

function multiply(a, b) {
  return "Done";
  // Next line will never run
  return a * b;
}
console.log(multiply(4, 3));

// Function with no return
function noReturn() {
  let a = "Hello";
}
console.log(noReturn()); // undefined
