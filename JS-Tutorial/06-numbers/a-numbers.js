// node JS-Tutorial\06-numbers\a-numbers.js

// Basic Number values
// ============================================================================= //
console.log(5);
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

// Exponents
// ============================================================================= //
console.log(123e-5); // 123 * 0.00001 = 0.00123
console.log(123e5); // 123 * 10000 = 1230000

// Number Precision
// ============================================================================= //
console.log(1234567890123456);
console.log(12345678901234567); // Rounded at 17th digit => 12345678901234568
console.log(9007199254740993); // 9007199254740992 - 2^53 or greater are too large to be represented accurately

// Floating-point precision issue
console.log(0.1 + 0.2); // 0.30000000000000004

// Fix floating-point issue
console.log((0.1 * 10 + 0.2 * 10) / 10);

// Arithmetic with strings
// ============================================================================= //
let a = 2;
let b = 4;
console.log(a + b); // 6

a = "2";
console.log(a + b); // "24"

b = "4";
console.log(a + b); // "24"

a = 2;
b = 4;
let c = "6";
console.log(c + a + b); // "624"
console.log(a + b + c); // "66"

a = "2";
b = "4";
console.log(b / a); // 2
console.log(b * a); // 14
console.log(b - a); // 2
console.log(b + a); // "42"
console.log(b % 2); // 0
console.log(b / "test"); // NaN
console.log(b / "2"); // 2
console.log(b / 0); // Infinity
console.log(-b / 0); // -Infinity
console.log(b / "Infinity"); // 0
console.log(b / Infinity); // 0
console.log(NaN + " test"); // "NaN test"

// Number Conversion & Bases
// ============================================================================= //

a = 31;
console.log(0xff); // 255 - Hexadecimal to Decimal
console.log(0o30); // 24 - Octal to Decimal
console.log(0b1010); // 10 - Binary to Decimal
console.log(a.toString(32)); // Decimal to Duotrigesimal
console.log(a.toString(16)); // Decimal to Hexadecimal
console.log(a.toString(8)); // Decimal to Octal
console.log(a.toString(2)); // Decimal to Binary
console.log(a.toString(13)); // Custom Base-13 to Decimal
/* console.log(a.toString(37)); // Error - radix argument must be between 2 and 36 */
