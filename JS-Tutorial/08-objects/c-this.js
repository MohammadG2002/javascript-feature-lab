// node JS-Tutorial\08-objects\c-this.js

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

console.log(person.test.getId2().this); // undefined
console.log(person.test.this); // undefined
console.log(person.test.getId2()); // 5
console.log(this); // undefined ( in strict mode )

const myFunction = () => {
  return this;
};
console.log(myFunction()); // undefined
