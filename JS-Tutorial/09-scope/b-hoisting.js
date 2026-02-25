// node JS-Tutorial\09-scope\b-hoisting.js

// var
a = 5;
console.log(a); // 5
var a;

/* b = 5 // hoisted to the top of the block, but not initialized */
let b;

/* c = 10 // hoisted to the top of the block, but not initialized */
/* const c; // const must have a value */

// Variable declaration must be at top
console.log(x); // undefined
var x = 20;

var y;
console.log(y); // undefined
y = 30;
