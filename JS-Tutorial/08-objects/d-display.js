// node JS-Tutorial\08-objects\d-display.js

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person); // { name: 'John', age: 30, city: 'New York' }

// For loop
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);

// Object.values()
console.log(Object.values(person)); // [ 'John', 30, 'New York' ]

// Object.entries()
console.log(Object.entries(person)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

// JSON.stringify()
console.log(JSON.stringify(person)); // {"name":"John","age":30,"city":"New York"}
