/*

https://www.codewars.com/kata/5266876b8f4bf2da9b000362

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

// NOVEMBER 2023
function likes(names) {
  if (!names.length) return "no one likes this";

  const [first, second, ...rest] = names;
  let output;
  if (names.length === 1) {
    output = `${first} likes this`;
  } else if (names.length === 2) {
    output = `${first} and ${second} like this`;
  } else if (names.length === 3) {
    output = `${first}, ${second} and ${rest} like this`;
  } else {
    output = `${first}, ${second} and ${names.length - 2} others like this`;
  }
  return output;
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes([]));

// OCTOBER 2022
// function likes(names) {
//   const [first, second, ...rest] = names;
//   const numOfNames = names.length;
//   let output;
//   if (numOfNames == 0) {
//     output = "no one likes this";
//   } else if (numOfNames == 1) {
//     output = `${first} likes this`;
//   } else if (numOfNames == 2) {
//     output = `${first} and ${second} like this`;
//   } else if (numOfNames == 3) {
//     output = `${first}, ${second} and ${rest} like this`;
//   } else {
//     output = `${first}, ${second} and ${numOfNames - 2} others like this`;
//   }
//   return output;
// }
