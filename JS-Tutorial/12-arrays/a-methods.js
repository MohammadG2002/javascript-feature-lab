// node JS-Tutorial\12-arrays\a-methods.js

let a = [1, 2, 3, 4, 5];
console.log(a); // [ 1, 2, 3, 4, 5 ]
console.log(a.length); // 5

a.length = 2;
console.log(a); // [ 1, 2 ]

a = ["A", "B", "C", "D", "E"];

// toString()
console.log(a.toString()); // "A,B,C,D,E"

// at() - at(index)
console.log(a.at(0)); // "A"
console.log(a.at(-1)); // "E"

// join() - join(string)
console.log(a.join()); // "A,B,C,D,E"
console.log(a.join(" - ")); // "A - B - C - D - E"

// pop() - removes last element
console.log(a.pop()); // "E"
console.log(a); // [ 'A', 'B', 'C', 'D' ]

// push() - push(string) - Adds element at end
a.push("F");
console.log(a); // [ 'A', 'B', 'C', 'D', 'F' ]

// shift() - Removes first element and shifts index
console.log(a.shift()); // A
console.log(a); // [ 'B', 'C', 'D', 'F' ]

// unshift() - unshift(string) - Adds element at start and shifts index
console.log(a.unshift()); // 4
console.log(a); // [ 'B', 'C', 'D', 'F' ] - nothing changed
console.log(a.unshift("A")); // 5
console.log(a); // [ 'A', 'B', 'C', 'D', 'F' ]

// isArray()
console.log(Array.isArray(a)); // true

// delete - deletes an item (empties its index)
delete a[0];
console.log(a); // [ <1 empty item>, 'B', 'C', 'D', 'F' ]

// concat() - concat(...arrays)
a = ["A", "B", "C", "D", "E"];
let b = ["F", "G", "H"];
console.log(a.concat(b)); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

// copyWithin() - copyWithin(from, target) - copies array elements to another position
a = ["A", "B", "C", "D", "E"];
console.log(a); // [ 'A', 'B', 'C', 'D', 'E' ]
a.copyWithin(0, 3);
console.log(a); // [ 'D', 'E', 'C', 'D', 'E' ]
a = ["A", "B", "C", "D", "E"];

// copyWithin(target, start, end)
a.copyWithin(0, 1, 3); // copy array elements from indexes 1-3 to the index 1 -> 1-3 = B and C
console.log(a); // [ 'B', 'C', 'C', 'D', 'E' ]

// flat() - flat(depth) - creates a new array with sub-array elements concatenated
a = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(a); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(a.flat()); // [ 1, 2, 3, 4, 5, 6 ]

a = [
  [
    [1, 2, ["Hello", [10]]],
    [3, 4],
    [5, 6],
  ],
  [7, 8],
  9,
];
a.flat(); // doesn't alter original array;
console.log(a); // [ [ [ 1, 2, [Array] ], [ 3, 4 ], [ 5, 6 ] ], [ 7, 8 ], 9 ]
console.log(a.flat()); // [ [ 1, 2, [ 'Hello', [Array] ] ], [ 3, 4 ], [ 5, 6 ], 7, 8, 9 ]
console.log(a.flat(10)); // [ 1, 2, 'Hello', 10, 3, 4, 5, 6, 7, 8, 9 ]

// flatMap()
const c = [1, 2, 3, 4, 5];
console.log(c.flatMap((x) => ["x", x, x * 2])); // [  'x', 1, 2,  'x', 2, 4,  'x', 3, 6,  'x', 4, 8,  'x', 5, 10 ]

// splice() - splice(target, n-removed, ...strings) - adds new items to an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
fruits.splice(0, fruits.length); // removes all values
console.log(fruits); // []

// toSpliced() - splice(start, n-removed, ...strings) - adds new items to an array without altering it
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi"); // doesn't alter original array
console.log(fruits2); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
console.log(fruits2.toSpliced(3, 2)); // [ 'Banana', 'Orange', 'Lemon', 'Mango' ]
console.log(fruits2.toSpliced(3, 0, "Pinapple", "Peach")); // [ 'Banana', 'Orange', 'Lemon', 'Pinapple', 'Peach', 'Kiwi', 'Apple', 'Mango' ]

// slice() - slice(start) - slices out a piece of an array
const values = ["a", "b", "c", "d", "e"];
console.log(values); // [ 'a', 'b', 'c', 'd', 'e' ]
let x = values.slice(2);
console.log(x); // [ 'c', 'd', 'e' ]

// slice() - slice(start, end)
console.log(values.slice(1, 3)); // [ 'b', 'c' ]
