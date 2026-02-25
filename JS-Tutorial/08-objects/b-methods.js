// node JS-Tutorial\08-objects\b-methods.js

// this - refers to the object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  test: {
    id: 5,
    getId2: function test2() {
      let id = 3;
      return this.id;
    },
  },
  getId: function () {
    return this.id;
  },
};
console.log(person.getId()); // 5566
console.log(person.test.getId2()); // 5

person.name = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person.name()); // "John Doe"
