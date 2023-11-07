/*

https://www.codewars.com/kata/54ff3102c1bad923760001f3

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

const countVowels = function (str) {
  const vowelsArr = ["a", "e", "i", "o", "u"];
  let count = 0;
  const charArr = str.replaceAll(" ", "").toLowerCase().split("");
  for (char of charArr) if (vowelsArr.includes(char)) ++count;
  return count;
};

console.log(countVowels("But not working in every possible browser:"));
