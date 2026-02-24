// node JS-Tutorial\07-functions\b-invocations.js

function myFunction(a, b) {
  return a + b;
}
console.log(myFunction(3, 5)); // 8
console.log(myFunction); // Returns the function itself => [Function: myFunction2]

let a = myFunction;
console.log(a(5, 10)); // 15
