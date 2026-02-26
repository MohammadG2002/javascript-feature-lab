// node JS-Tutorial\12-arrays\c-sort.js

// sort() - sort(array) - Sorts array alphabetically (0-9, A-Z, a-z) and alters it
let a = [5, 10, 8, 1, 20, 43, 13];
console.log(a.sort()); // [ 1, 10, 13, 20, 43, 5, 8 ]

a = ["a", "B", "b", 500, 1, 893, 85, "c", "Ra", "Roof"];
console.log(a.sort()); // [ 1, 500, 85, 893, 'B', 'Ra', 'Roof', 'a', 'b', 'c' ]
console.log(a); // [ 1, 500, 85, 893, 'B', 'Ra', 'Roof', 'a', 'b', 'c' ]

// reverse() - reverse(array) - reverses the elements
console.log(a.reverse()); // [ 'c', 'b', 'a', 'Roof', 'Ra', 'B',  893, 85, 500, 1 ]

// toSorted() - toSorted(array) - same as sort() but without altering
console.log(a.toSorted()); // [ 1, 500, 85, 893, 'B', 'Ra', 'Roof', 'a', 'b', 'c' ]
console.log(a); // [ 'c', 'b', 'a', 'Roof', 'Ra', 'B',  893, 85, 500, 1 ]

// toReversed() - toReversed(array) - same as reverse() but without altering
console.log(a.toReversed()); // [ 1, 500, 85, 893, 'B', 'Ra', 'Roof', 'a', 'b', 'c' ]
console.log(a); // [ 'c', 'b', 'a', 'Roof', 'Ra', 'B',  893, 85, 500, 1 ]

// sort numbers
a = [1, 25, 100, 4, 6, 43, 200];
console.log(a.toSorted()); // [ 1, 100, 200, 25, 4, 43, 6 ]
console.log(a.toSorted((a, b) => a - b)); // [ 1, 4, 6, 25, 43, 100, 200 ]
console.log(a.toSorted((a, b) => b - a)); // [ 200, 100, 43, 25, 6, 4, 1 ] - descending

// Minimum value
console.log(a.toSorted((a, b) => a - b)[0]); // 1
console.log(Math.min.apply(null, a)); // 1

// Maximum value
console.log(a.toSorted((a, b) => b - a)[0]); // 200
console.log(Math.max.apply(null, a)); // 200
