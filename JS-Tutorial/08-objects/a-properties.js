// node JS-Tutorial\08-objects\a-properties.js

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// object
console.log(person); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

// using variables
let a = "age";
console.log(person[a]); // 50

// adding new property
person.middleName = "Mark";
console.log(person.middleName); // "Mark"

// removing existing property
delete person.age;
console.log(person.age); // undefined

// in - check if property exists
console.log("age" in person); // false
console.log("firstName" in person); // true

// Nested objects
let person2 = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};
console.log(person2.address.city); // "New York"
console.log(person2["address"]["state"]); // "NY"
