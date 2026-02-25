// node JS-Tutorial\08-objects\e-constructors.js

function Person(a, b, c) {
  this.first = a;
  this.second = b;
  this.third = c;
}

const person1 = new Person("John", "M", "Doe");
console.log(person1); // Person { first: 'John', second: 'M', third: 'Doe' }
console.log(person1.first); // "John"

// Adding a Property to a Constructor
// ============================================================================= //

Person.forth = "Mark";
console.log(Person.forth); // "Mark"
console.log(person1.forth); // undefined

// Using prototype
Person.prototype.forth = "Mark";
console.log(Person.forth); // "Mark"
console.log(person1.forth); // "Mark"

let a = {};
a += 1;
console.log(a); // [object Object]1
a += 5;
console.log(a); // [object Object]15
