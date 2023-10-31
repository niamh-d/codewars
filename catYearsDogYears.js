/*

https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that


*/

// MY CODE
const convertYears = function (numYears) {
  const yearsArr = new Array(15, 15);
  const addYears = (yearsCat, dogYears) =>
    yearsArr.forEach((_, i) =>
      i === 0 ? (yearsArr[i] += yearsCat) : (yearsArr[i] += dogYears)
    );
  if (numYears > 1) addYears(9, 9);
  if (numYears > 2) addYears(4 * (numYears - 2), 5 * (numYears - 2));
  yearsArr.unshift(numYears);
  return yearsArr;
};

// ONLINE SOLUTION
// const convertYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

// ONLINE SOLUTION
// const convertYears = humanYears => [
//   humanYears,
//   ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
//   ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
// ];

console.log(convertYears(1));
console.log(convertYears(2));
console.log(convertYears(3));
console.log(convertYears(5));
console.log(convertYears(10));
