// node JS-Tutorial\07-functions\g-arrow.js
// Arrow Functions allow a shorter syntax for function expressions.

const add = (a, b) => {
  return a + b;
};
console.log(add(4, 5)); // 9

/* console.log(add2(4, 5)); // Error - Cannot access before initialization */
const add2 = (a, b) => {
  return a + b;
};
