// variable types

// Number
let a = 1;
console.log(a);

// BigInt
a = BigInt(13e50);
console.log(a);

// String
a = "Hello";
console.log(a);

// Boolean
a = true;
console.log(a);

// Null
a = null;
console.log(a);

// Undefined
a = undefined;
console.log(a);

// Object
a = {};
console.log(a);

// Array
a = [];
console.log(a);

// Date
a = new Date();
console.log(a);

// Function
a = () => {};
console.log(a);

// Symbol
a = Symbol();
console.log(a);

// Symbol understanding
const id1 = Symbol("b");
const id2 = Symbol("b");

const id = {
  //   id1: 2, // Symbols not used
  //   id2: 1, // Symbols not used
  [id1]: 2, // Symbols used
  [id2]: 2, // Symbols used
};

console.log(id1); // Symbol(b)
console.log(id2); // Symbol(b)
console.log(id1 == id2); // false
console.log(id1 === id2); // false
console.log(id.id1 === id.id2); // true => both undefined // cannot access symbol keys with dot notation.
console.log(id[id1] === id[id2]); // true => 2 === 2
