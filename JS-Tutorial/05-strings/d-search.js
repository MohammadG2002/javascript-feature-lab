// node JS-Tutorial\05-strings\d-search.js

let a;

// Index search - index of occurence
// ============================================================================= //

a = "Hello there, how you doing E?";

// indexOf() ==> indexOf(value, afterIndex)
console.log(a.indexOf("there")); // First occurence of "there"
console.log(a.indexOf("e")); // First occurence of "e"
console.log(a.indexOf("e", 5)); // First occurence of "e" after index 5

// lastIndexOf() ==> lastIndexOf(value, beforeIndex);
console.log(a.lastIndexOf("e")); // Last occurence of "e"
console.log(a.lastIndexOf("e", 5)); // Last occurence of "e" before index 5

// search() ==> search(string)
console.log(a.search("e")); // First occurence of "e"
console.log(a.search(/e/)); // search() uses regular expression

// match() ==> match(string)
console.log(a.match("e")); // Array containing the result of matching string
console.log(a.match(/e/g)); // Array containing all the results of matching string
console.log(a.match(/e/).length); // Count of first occurence
console.log(a.match(/e/g).length); // Count of all occurences
console.log(a.match(/e/gi).length); // Count of all occurences case insensitive

// matchAll() ==> matchAll(string)
console.log(a.matchAll("e")); // "Object [RegExp String Iterator] {}"
console.log(Array.from(a.matchAll("e"))); // Array containing all the results of matching string
console.log(Array.from(a.matchAll(/e/gi))); // Array containing all the results of matching string case insensitive
console.log(Array.from(a.matchAll(/e/gi)).length); // Count of all occurences case insensitive

// match() vs matchAll() with /g -> Same result
console.log(a.match(/e/gi));
console.log(Array.from(a.matchAll(/e/gi))); // ES2021 - Doesn't work on internet explorer

// String existing - Check if string exists in the string
// ============================================================================= //

// includes() ==> includes(string, afterIndex) - Check if string exists
a = "Hello there, how you doing E?";
console.log(a.includes("there")); // true
console.log(a.includes("e", 5)); // true
console.log(a.includes("e", 15)); // case sensitive
/* console.log(a.includes(/e/i, 15)); // Doesn't use regular expressions */

// startsWith() ==> startsWith(string, afterIndex) - Check if string starts with the string
a = "Hello there, how you doing?";
console.log(a.startsWith("Hello")); // true
console.log(a.startsWith("there")); // false
console.log(a.startsWith("there", 6)); // true

a = " Hello";
console.log(a.startsWith("Hello")); // false - Doesn't ignore spaces
console.log(a.startsWith("hello")); // false - Case sensitive

// endsWith() ==> endsWith(string, beforeIndex) - Check if string ends with the string
a = "Hello there, how you doing?";
console.log(a.endsWith("?")); // true
console.log(a.endsWith("Hello", 5)); // true
