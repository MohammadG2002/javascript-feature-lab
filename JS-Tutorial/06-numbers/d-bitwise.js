// node JS-Tutorial\06-numbers\d-bitwise.js

// Bitwise AND ( & ) - 0 if one of the bits is 0
console.log(0 & 0); // 0
console.log(1 & 0); // 0
console.log(1 & 1); // 1
console.log(true & false); // 0
console.log(11 & 10); // 10
console.log(1 & 10); // 0
/* console.log(01 & 11); // Error */
console.log("1" & "0"); // 0
console.log("1" & 1); // 1
console.log("01" & 11); // 1
console.log(11 & "01"); // 1
console.log(5 & 2); // 0
console.log(5 & 3); // 101 & 011 = 001 = 1
console.log(5 & 5); // 5
console.log(5 & true); // 1
console.log(true & 5); // 1
console.log(true & 0); // 0

// Bitwise OR ( | ) - 1 if one of the bits is 1
console.log(0 | 0); // 0
console.log(0 | 1); // 1
console.log(true | false); // 1
console.log(11 | 10); // 11
console.log(1 | 10); // 11
console.log(0 | 10); // 10
console.log(57 | 43); // 00111011 = 59

// Bitwise XOR ( ^ ) - 1 if the bits are different
console.log(1 ^ 0); // 1
console.log(1 ^ 1); // 0
console.log(true ^ false); // 1
console.log(0b1101 ^ 0b1010); // 0111 = 7

// Bitwise NOT - 1 if 0, 0 if 1 ==> -(n)-1
console.log(~0); // 00000000000000000000000000000000 ==> 11111111111111111111111111111111 = -1
console.log(~45); // ~45 = -46
console.log(~-45); // ~-45 = 44

// Bitwise Left Shift ( << )
console.log(5 << 1); // 00000000000000000000000000001010 = 10
console.log(-5 << 3); // 11111111111111111111111111011000 = -40

// Bitwise Right Shift ( >> ) - Sign preserving
console.log(5 >> 1); // 00000000000000000000000000000010 = 2
console.log(5 >> 3); // 00000000000000000000000000000000 = 0
console.log(-5 >> 1); // 11111111111111111111111111111101 = -3
let a = -5;
console.log(a >> 1); // -3

// Right Shift ( >>> ) - Zero fill
console.log(-8 >>> 1); // 11111111111111111111111111111000 >>> 01111111111111111111111111111100 = 2147483644

// Left Shift Assignment ( <<= ) - Left shift and assign
a = -5;
console.log((a <<= 2)); // -20
console.log(a); // -20

// Right Shift Assignment ( >>= ) - Right shift and assign (signed)
a = -5;
console.log((a >>= 2)); // -2
console.log(a); // -2

// Unsigned Right Shift Assignment ( >>>= ) - right shifts a variable (unsigned)
a = -5;
console.log((a >>>= 2)); // 1073741822
console.log(a); // 1073741822

// Bitwise AND Assignment ( &= )
a = 5;
a &= 3;
console.log(a); // 1

// Bitwise OR Assignment ( |= )
a = 5;
a |= 3;
console.log(a); // 7

// Bitwise XOR Assignment ( ^= )
a = 5;
a ^= 3;
console.log(a); // 6
