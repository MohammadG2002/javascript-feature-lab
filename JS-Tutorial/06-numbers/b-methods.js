// node JS-Tutorial\06-numbers\b-methods.js

// Base conversion
// ============================================================================= //

// toString() - convert the number to a different base
let a = -31;
console.log(a.toString()); // "-31"
console.log(a.toString(32)); // "-v"
console.log((100 + 53).toString(2)); // 10011001

// toExponential() - number rounded and written using exponential notation
console.log(a.toExponential()); // "-3.1e+1"
console.log(a.toExponential(5)); // "-3.10000e+1"

// toFixed() - number written with a specified number of decimals
a = -31.541;
console.log(a.toFixed()); // -32
console.log(a.toFixed(2)); // "-31.54"
console.log(a.toFixed(4)); // "-31.5410"

// toPrecision() - number written with a specified length
console.log(a.toPrecision()); // "-31.541"
console.log(a.toPrecision(1)); // -3*10 ==> "-3e+1"
console.log(a.toPrecision(2)); // "-32"
console.log(a.toPrecision(4)); // "-31.54"
console.log(a.toPrecision(6)); // "-31.5410"
/* console.log(a.toPrecision(0)); // argument must be between 1 and 100 */

// valueOf() - returns a number as a number
a = 12;
console.log(a.valueOf()); // 12
a = new Number(14);
console.log(a); // [Number: 14]
console.log(a.valueOf()); // 14
console.log(typeof a.valueOf()); // "number"

// Converting methods
// ============================================================================= //

// Number() - convert JavaScript variables to numbers
console.log(Number()); // 0
console.log(Number("123")); // 123
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("     10     ")); // 10
console.log(Number("John")); // NaN
console.log(Number(new Date("1970-01-02"))); // 86400000ms - number of milliseconds since 1.1.1970
console.log(
  Number(
    (new Date("2026-02-24") - new Date("2025-01-01")) / 1000 / 60 / 60 / 24,
  ),
); // 419

// parseInt() - parses a string and returns an integer
console.log(parseInt(-10)); // -10
console.log(parseInt(10.563)); // 10
console.log(parseInt("10.563")); // 10
console.log(parseInt("        10    ")); // 10
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("10 example")); // 10
console.log(parseInt("example 10")); // NaN

// parseFloat() - parses a string and returns a floating-point number
console.log(parseFloat(1)); // 1
console.log(parseFloat(1.23)); // 1.23
console.log(parseFloat("    10.45    ")); // 10.45
console.log(parseFloat("10.45 example")); // 10.45

// Number object methods
// ============================================================================= //

// Number.isInteger()
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(10.45)); // false

// Number.isFinite()
console.log(Number.isFinite(10.45)); // true
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false

// Number.isNaN()
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN("test")); // false - strict to numbers only

// Number.isSafeInteger()
console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger("10")); // false
console.log(Number.isSafeInteger(10.45)); // false
console.log(Number.isSafeInteger(1234567890123456)); // true
console.log(Number.isSafeInteger(12345678901234567)); // false
console.log(Number.isSafeInteger(9007199254740992)); // false >= 2^53
console.log(Number.isSafeInteger(Infinity)); // false
console.log(Number.isSafeInteger(NaN)); // false
