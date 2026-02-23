// Double quotes "
let a = "Hello";
console.log(a);

// Single quotes `
a = `hi`;
console.log(a);

// Quotes inside quotes
a = "Hello `there`";
console.log(a);

a = `Hello "there"`;
console.log(a);

// String length
console.log(a.length); // 13 (includes spaces)

// Escape characters

// \`
a = `Hey, it\`s me`;
console.log(a);

// Strings as objects
let b = new String("Hello");
console.log(typeof b);

a = "Hi";
b = new String("Hi");
console.log(a == b); // true
console.log(a === b); // false
