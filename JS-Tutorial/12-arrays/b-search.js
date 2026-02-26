// node JS-Tutorial\12-arrays\b-search.js

// indexOf() - indexOf(item, start)
let a = ["A", "B", "C", "D", "E", "B", "B", "A"];
console.log(a.indexOf("B")); // 1
console.log(a.indexOf("B", 2)); // 5

// lastIndexOf() - lastIndexOf(item, end)
console.log(a.lastIndexOf("B")); // 6
console.log(a.lastIndexOf("B", 3)); // 1

// includes() - includes(item, start)
console.log(a.includes("D")); // true
console.log(a.includes("D", 5));

// find() - find(function)
a = [5, 10, 8, 1, 20, 43, 13];
console.log(a.find((x) => x > 10)); // 20

// findIndex() - findIndex(function)
a = [5, 10, 8, 1, 20, 43, 13];
console.log(a.findIndex((x) => x > 10)); // 4

// findLast() - findLast(function) - finds last occurence that fits the condition
console.log(a.findLast((x) => x > 10)); // 13

// findLastIndex() - findLastIndex(function)
console.log(a.findLastIndex((x) => x > 10)); // 6
