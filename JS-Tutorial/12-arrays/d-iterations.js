// node JS-Tutorial\12-arrays\d-iterations.js

// forEach()
let a = [1, 2, 3, 4, 5];
console.log(a.forEach((x) => x)); // undefined - doesn't return a value
let b = "";
a.forEach((x) => (b += x + " "));
console.log(b); // 1 2 3 4 5

// map()
console.log(a.map((x) => x)); // [ 1, 2, 3, 4, 5 ]
b = "";
a.map((x) => (b += x + " "));
console.log(b); // 1 2 3 4 5

// forEach() vs map()
b = 0;
b = a.forEach((x) => x);
console.log(b); // undefined
b = a.map((x) => x);
console.log(b); // [ 1, 2, 3, 4, 5 ]

// flatMap()
console.log(a.flatMap((x) => x)); // [ 1, 2, 3, 4, 5 ]
console.log(a.flatMap((x) => [x, x])); // [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ]

// flatMap() vs map()
console.log(a.map((x) => [x, x])); // [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] ]
console.log(a.flatMap((x) => [x, x])); // [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ]

// reduce() - reduce((accumulator, currentValue, index, array) - doesn't reduce original array
console.log(a.reduce((a, b) => a + b)); // 15
console.log(a.reduce((a, b) => a + b, 100)); // 115 -> 100 + 1; 101 + 2; 103 + 3; etc. = 115
console.log(a.reduce((a, b) => a * b)); // 1*2*3*4*5 = 120
console.log(a.reduce((a, b) => a * b, 100)); // 100*1*2*3*4*5 = 12000

// reduceRight()
console.log(a.reduceRight((a, b) => a + b)); // 15
console.log(a.reduceRight((a, b) => a + b, 100)); // 115

// reduce() vs reduceRight()
a = ["A", "B", "C", "D", "E"];
console.log(a.reduce((a, b) => a + b)); // ABCDE
console.log(a.reduceRight((a, b) => a + b)); // EDCBA

// every() - checks if all array values pass a test
a = [1, 2, 3, 4, 5];
console.log(a.every((x) => x > 0)); // true
console.log(a.every((x) => x > 3)); // false

// some() - checks if any array values pass a test
console.log(a.some((x) => x > 3)); // true
console.log(a.some((x) => x > 6)); // false

// Array.from() - returns an Array object from any iterable object, and any object with a length property
console.log(Array.from("Hello")); // [ 'H', 'e', 'l', 'l', 'o' ]
a = [1, 2, 3, 4, 5];
console.log(Array.from(a, (x) => x * 2)); // [ 2, 4, 6, 8, 10 ]
/* console.log(a.from((x) => x * 2)); // Error */

// keys() - returns an Array Iterator object with the keys of an array
console.log(a.keys()); // Object [Array Iterator] {}
console.log(Array.from(a.keys())); // [ 0, 1, 2, 3, 4 ]
for (let x of a.keys()) {
  console.log(x); // 0 1 2 3 4
}

// entries()
console.log(a.entries()); // Object [Array Iterator] {}
for (let x of a.entries()) {
  console.log(x); // [ 0, 1 ][ 1, 2 ][ 2, 3 ][ 3, 4 ][ 4, 5 ]
}

// with() - updates elements in an array without altering original
console.log(a); // [ 1, 2, 3, 4, 5 ]
console.log(a.with(0, "test")); // [ 'test', 2, 3, 4, 5 ]

// Array spread ...
a = [1, 2, 3, 4, 5];
b = [5, 6, 7, 8, 9];
console.log([...a, ...b]); // [ 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10 ]

// direct assign vs spread assign
a = [1, 2, 3, 4, 5];
b = a;
console.log(b); // [ 1, 2, 3, 4, 5 ]
b[0] = "test";
console.log(b); // [ 'test', 2, 3, 4, 5 ]
console.log(a); // [ 'test', 2, 3, 4, 5 ]

a = [1, 2, 3, 4, 5];
b = [...a];
console.log(b); // [ 1, 2, 3, 4, 5 ]
b[0] = "test";
console.log(b); // [ 'test', 2, 3, 4, 5 ]
console.log(a); // [ 1, 2, 3, 4, 5 ]
