// node JS-Tutorial\06-numbers\e-bigInt.js

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 2); // loses precision = 9007199254740992

console.log(123456789012345678); // 123456789012345680 - inaccurate
console.log(123456789012345678n); // 123456789012345678n
/* console.log(123456789012345678n + 100); // Cannot mix BigInt and other types */
console.log(123456789012345678n + 100n); // 123456789012345778n
/* console.log(Number.MAX_SAFE_INTEGER + 2n); // Cannot mix BigInt and other types */
/* console.log((Number.MAX_SAFE_INTEGER)n + 2n); // Error */
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 2n);
console.log("123456789012345678n" + 100n); // 123456789012345678n100 - wrong
console.log(BigInt("123456789012345678") + 100n); // 123456789012345778n

let a = BigInt("1234567890123456789");
console.log(Number(a)); // 1234567890123456800 - Converting BigInt to Number loses precision
/* console.log(1.5n) // Cannot have decimals */

console.log(10n == 10); // true
console.log(10n === 10); // false - different types

console.log(9007199254740992 == 9007199254740993); // true
console.log(9007199254740992n == 9007199254740993n); // false
console.log(9007199254740992 == 9007199254740993n); // false
