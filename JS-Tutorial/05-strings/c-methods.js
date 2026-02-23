// node JS-Tutorial\05-strings\c-methods.js

// String length
let a = "1234567abcdefg";
console.log(a.length); // 14

// String indexing
// ============================================================================= //

// charAt()
console.log(a.charAt(13)); // "g"

// []
console.log(a[13]); // "g"

// [] vs charAt()
console.log(a.charAt(20)); // Returns string only > ""
console.log(a[20]); // Returns value > undefined

// at()
console.log(a.at(13)); // "g"

// at() vs charAt() vs []
console.log(a.at(-2)); // Supports negative indexes > "f"
console.log(a.charAt(-2)); // ""
console.log(a[-2]); // undefined

// String code indexing
// ============================================================================= //

// charCodeAt()
console.log(a.charCodeAt(7)); // UTF-16 > code of a = 97

// codePointAt()
console.log(a.codePointAt(7)); // Unicode code point > code of a = 97
// Note: UTF-16 breaks for characters outside the Basic Multilingual Plane (like many emojis).

// charPointAt() vs charCodeAt()
a = "😂";
console.log(a.charCodeAt(0)); // Returns half (breaks)
console.log(a.codePointAt(0)); // Returns full code

// String concatenation
// ============================================================================= //

// +
a = "Hello" + " " + "there";
console.log(a); // Hello there

// concat()
a = "Hello";
console.log(a.concat(" ", "there", "!"));

// String extraction
// ============================================================================= //

// slice() ==> slice(start, end) ==> if(value < 0) value = string.length + value;
a = "Hello there my friend";
console.log(a.slice(6, 11)); // "there"
console.log(a.slice(6)); // (6,21) = "there my friend"
console.log(a.slice(-6)); // 21 - 6 = 14 ==> (14,21) = "friend"
console.log(a.slice(-15, -1)); // 21 - 15 = 6, 20 - 1 = 20 ==> (6,20) = "there my frien"
console.log(a.slice(-15, 0)); // (6,0) = ""
console.log(a.slice(-15, 11)); // (6,11) = "there"

// substring() ==> substring(start, end) ==> if(value < 0) value = 0;
console.log(a.substring(6, 11)); // "there"
console.log(a.substring(-6)); // (0,21) = "Hello there my friend"
console.log(a.substring(-15, -1)); // (0,0) = ""

// substr() ==> substr(start, length) = slice(start, start + length)
console.log(a.substr(6, 11)); // (6,17) = "there my fr"
console.log(a.substr(6)); // (6,21) = "there my friend"
console.log(a.substr(-6)); // (15, 21) = "friend"
console.log(a.substr(-6, 2)); // (15,17) = "fr"

// String conversion -
// ============================================================================= //

// toUpperCase()
console.log(a.toUpperCase()); // "HELLO THERE MY FRIEND"

// toLowerCase()
console.log(a.toLowerCase()); // "hello there my friend"

// String well forming
// ============================================================================= //

// isWellFormed()
console.log(a.isWellFormed()); // true

a = "Hello World \uD800";
console.log(a.isWellFormed()); // false

// toWellFormed()
console.log(a.toWellFormed()); // "Hello World �"

// String trimming - Removing whitespaces
// ============================================================================= //

// trim()  ==> Removes whitespaces from both start and end of string
a = "     Hello     ";
let b = "there";
console.log(a + b); // "     Hello     there"
console.log(a.trim() + b); // "Hellothere"

// trimStart()  ==> Removes whitespace only from the start of a string.
console.log(a.trimStart() + b); // "Hello     there"

// trimEnd()  ==> Removes whitespace only from the end of a string.
console.log(a.trimEnd() + b); // "     Hellothere"

// String padding - Adding values until string reaches the specified length
// ============================================================================= //

// padStart() => padStart(length, value)
a = "Hello";
console.log(a.padStart(10, "x")); // "xxxxxHello"

// padEnd()
console.log(a.padEnd(10, "x")); // "Helloxxxxx"

a = 5; // padding is a string method
console.log(a.toString().padStart(3, "0")); // "005"

// String repeat
// ============================================================================= //

// repeat() => repeat(count)
a = "Hello";
console.log(a.repeat(3)); // "HelloHelloHello"

a = 5; // repeat() is a string method
console.log(a.toString().repeat(3)); // "555"

// String replacement
// ============================================================================= //

// replace()
a = "Hello World";
console.log(a.replace("World", "there")); // "Hello there"
console.log(a.replace("WORLD", "there")); // case sensitive ==> "Hello World"
console.log(a.replace(/World/i, "there")); // "Hello there"

a = "Hello World World World";
console.log(a.replace("World", "there")); // first match only ==> "Hello there World World"
console.log(a.replace(/World/g, "there")); // "Hello there there there"

// replaceAll()
console.log(a.replaceAll("World", "there")); // "Hello there there there"

a = "Hello World world World";
console.log(a.replaceAll("World", "there")); // case sensitive ==> "Hello there world there"
/* console.log(a.replaceAll(/World/i, "there")); // Error */
console.log(a.replaceAll(/World/gi, "there")); // "Hello there world there"

// replace() vs replaceAll() with /g -> Same result
console.log(a.replace(/World/gi, "there"));
console.log(a.replaceAll(/World/gi, "there")); // ES2021 - Doesn't work on internet explorer

// String splitting - Converts string into array
// ============================================================================= //

// split()
a = "Hello World";
console.log(a.split(" ")); // ["Hello", "World"]
console.log(a.split(/ /)); // ["Hello", "World"]
console.log(a.split("")); // ["H", "e", "l", "l","o", " ", "W", "o","r", "l", "d"]
console.log(a.split()); // ["Hello World"]
