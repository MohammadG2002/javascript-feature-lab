let a = 15;
let b = 15;

// == and !=
a = 15;
b = 15;
console.log(a == b); // true

a = "15";
b = 15;
console.log(a == b); // true

a = 15;
console.log(a == 15); // true

// === and !==
a = 15;
b = 15;
console.log(a === b); // true

a = "15";
b = 15;
console.log(a === b); // false

a = 15;
console.log(a === 15); // true

// >, <, >=, <=
a = 20;
b = 15;
console.log(a > b); // true

console.log(a < b); // false

a = 15;
b = 15;
console.log(a >= b); // true

console.log(a <= b); // true

console.log(2 < "12"); // true
console.log("2" < "12"); // false
console.log("2" < "21"); // true
console.log("2" < "3"); //true
