// node JS-Tutorial\10-dates\a-formats.js

console.log(new Date()); // Current Time e.g. 2026-02-25T11:06:51.161Z
console.log(new Date("2025-03-25")); // 2025-03-25T00:00:00.000Z
console.log(new Date("2025-03")); // 2025-03-01T00:00:00.000Z
console.log(new Date("2025")); // 2025-01-01T00:00:00.000Z
console.log(new Date("2025-03-25T12:30:15")); // 2025-03-25T10:30:15.000Z
console.log(new Date("2025-03-25T12:30:15Z")); // 2025-03-25T12:30:15.000Z
console.log(new Date("2025-03-25T12:30:15+03:00")); // 2025-03-25T09:30:15.000Z
console.log(new Date("03/25/2025")); // 2025-03-24T22:00:00.000Z

// Removing zeros
console.log(new Date("3/25/2025")); // 2025-03-24T22:00:00.000Z
console.log(new Date("3/2/2025")); // 2025-03-01T22:00:00.000Z
console.log(new Date("2025-3-25")); // 2025-03-24T22:00:00.000Z
console.log(new Date("2025-3-25T12:30:15")); // Invalid Date

// DD/MM/YYYY
console.log(new Date("25/03/2025")); // Invalid Date
console.log(new Date("25/Mar/2025")); // 2025-03-24T22:00:00.000Z
console.log(new Date("25 Mar 2025")); // 2025-03-24T22:00:00.000Z
console.log(new Date("25 March 25")); // 2025-03-24T22:00:00.000Z
console.log(new Date("25/Mar/25")); // 2025-03-24T22:00:00.000Z
console.log(new Date("2025-Mar-25")); // 2025-03-24T22:00:00.000Z

// MM/DD/YYYY
console.log(new Date("03/25/2025")); // 2025-03-24T22:00:00.000Z
console.log(new Date("Mar-25-2025")); // 2025-03-24T22:00:00.000Z
console.log(new Date("2025-25-Mar")); // 2025-03-24T22:00:00.000Z
console.log(new Date("march, 25, 2025")); // 2025-03-24T22:00:00.000Z
console.log(new Date("MARCH, 25, 2025")); // 2025-03-24T22:00:00.000Z
console.log(new Date("marc, 25, 2025")); // 2025-03-24T22:00:00.000Z

// Date.parse
let a = new Date("march 25, 2025");
console.log(a); // 2025-03-24T22:00:00.000Z

let b = Date.parse("march 25, 2025");
console.log(b); // 1742853600000
console.log(new Date(b)); // 2025-03-24T22:00:00.000Z
console.log(new Date(1742853600000)); // 2025-03-24T22:00:00.000Z
console.log(new Date(1)); // 1970-01-01T00:00:00.001Z
