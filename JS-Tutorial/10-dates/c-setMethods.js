// node JS-Tutorial\10-dates\c-setMethods.js

const a = new Date("2025-03-25");
console.log(a); // 2025-03-25T00:00:00.000Z

// setFullYear() - sets year
a.setFullYear(2026);
console.log(a); // 2026-03-25T00:00:00.000Z

// setMonth() - sets month ( )
a.setMonth(4);
console.log(a); // 2026-05-24T23:00:00.000Z

// setDate() - sets day of the month -> ( 1 - 31 )
a.setDate(25);
console.log(a); // 2026-05-24T23:00:00.000Z

// setHours() - sets hours -> ( 0 to 23 )
a.setHours(12);
console.log(a); // 2026-05-25T09:00:00.000Z

// setMinutes() - sets minutes -> ( 0 to 59 )
a.setMinutes(32);
console.log(a); // 2026-05-25T09:32:00.000Z

// setSeconds() - sets seconds -> ( 0 to 59 )
a.setSeconds(21);
console.log(a); // 2026-05-25T09:32:21.000Z

// setMilliseconds() - sets milliseconds -> ( 0 to 999 )
a.setMilliseconds(247);
console.log(a); // 2026-05-25T09:32:21.247Z

// setTime() - sets time in milliseconds since January 1, 1970
a.setTime(123);
console.log(a); // 1970-01-01T00:00:00.123Z
