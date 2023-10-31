/*

https://www.codewars.com/kata/reverse-every-other-word-in-the-string

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

*/

const testStr =
  "Reverse every other word in a given string, then return the string.";

const testStr2 =
  "It's no secret that most people know him from an ad for Mace that debuted on television in 2013 and featured the slogan, “You can go extra smile.” He'll be back for the final season, which will premiere in 2019.” I remember one time I went to the Workman's [Club, Dublin] with friends and asked someone for a cigarette or something to smoke.";

const reverseEverySecondWord = (str) =>
  str
    .split(" ")
    .map((word, i) => (i % 2 ? word.split("").reverse().join("") : word))
    .join(" ")
    .trim();

console.log(reverseEverySecondWord(testStr));
console.log(reverseEverySecondWord(testStr2));
