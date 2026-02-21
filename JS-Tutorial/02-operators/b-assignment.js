let a = 10;
let b = 15;

// +=
a += b;
console.log(a); // 25

// -=
a -= b;
console.log(a); // 10

// *=
a *= b;
console.log(a); // 150

// /=
a /= b;
console.log(a); // 1

// %=
a %= b;
console.log(a); // 0

// **=
a **= b;
console.log(a); // 1

// Increment
a++;
console.log(a); // ++a = a+=1

// Decrement
a--;
console.log(a); // --a = a-=1

// &&=
// If (1st is true) 2nd is assigned
// b = true &&= 15; // Error
// b = 20 &&= 15; // Error
a = true;
b = a &&= 15; // if(a) b=15;
console.log(b); // 15

a = 20;
b = a &&= 15;
console.log(b); // 15

// ||=
// If (1st is true) 1st is assigned, else 2nd is assigned
a = false;
b = a ||= 15;
console.log(b); // 15

a = 20;
b = a ||= 15;
console.log(b); // 20

// ??=
// If (1st is null or undefined) 2nd is assigned
a = null;
b = a ??= 15;
console.log(b); // 15

a = 20;
b = a ??= 15;
console.log(b); // 20
