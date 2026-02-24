// node JS-Tutorial\06-numbers\c-properties.js

// Number.EPSILON - next possible number greater than 1 that JS can represent
console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(1 + Number.EPSILON); // 1.0000000000000002
console.log(1 + Number.EPSILON / 2); // 1

// Number.MAX_VALUE - largest possible number in JavaScript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE + 100); // same
console.log(Number.MAX_VALUE * 2); // Infinity

// Number.MIN_VALUE - smallest possible number in JavaScript
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE - 1); // -1
console.log(Number.MIN_VALUE / 2); // 0
console.log(Number.MIN_VALUE - Number.EPSILON); // -2.220446049250313e-16 = -EPSILON

// Number.MIN_SAFE_INTEGER - minimum safe integer in JavaScript
console.log(Number.MIN_SAFE_INTEGER); // -(2^53 - 1) = -9007199254740991

// Number.MAX_SAFE_INTEGER - maximum safe integer in JavaScript
console.log(Number.MAX_SAFE_INTEGER); // 2^53 - 1 = 9007199254740991

// Number.POSITIVE_INFINITY - positive infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

// Number.NEGATIVE_INFINITY - negative infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// Number.NaN - not a number
console.log(Number.NaN); // NaN
