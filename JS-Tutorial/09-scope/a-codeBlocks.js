// node JS-Tutorial\09-scope\a-codeBlocks.js
let areal;
{
  let x = 10;
  let y = 100;
  areal = x * y;
  let sum = x + y;
  console.log(areal);
  console.log(sum);
}
console.log(areal);
/* console.log(sum); // Error */
