// node JS-Tutorial\07-functions\a-intro.js

// Functions
function myFunction() {
  console.log("Hello World");
}
myFunction();

function myFunction1(a, b) {
  console.log(a + " Hello World " + b);
}
myFunction1("Hey", "test");

function myFunction2(a, b) {
  return a + b;
}
console.log(myFunction2(1, 2));
