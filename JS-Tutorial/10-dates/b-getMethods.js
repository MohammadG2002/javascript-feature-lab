// node JS-Tutorial\10-dates\b-getMethods.js

const a = new Date("2025-03-25");
console.log(a); // 2025-03-25T00:00:00.000Z

// getFullYear() - Returns year
console.log(a.getFullYear()); // 2025

// getMonth() - Returns month -> ( 0 to 11 )
console.log(a.getMonth()); // 2 in JS

// getDate() - Returns day of the month -> ( 1 - 31 )
console.log(a.getDate()); // 25

// getDay() - Returns day of the week -> ( 0 to 6 )
console.log(a.getDay()); // 2 in JS

// getHours() - Returns hours -> ( 0 to 23 )
console.log(a.getHours()); // 0

// getMinutes() - Returns minutes -> ( 0 to 59 )
console.log(a.getMinutes()); // 0

// getSeconds() - Returns seconds -> ( 0 to 59 )
console.log(a.getSeconds()); // 0

// getMilliseconds() - Returns milliseconds -> ( 0 to 999 )
console.log(a.getMilliseconds()); // 0

// getTime() - Returns time in milliseconds since January 1, 1970
console.log(a.getTime()); // 1680
