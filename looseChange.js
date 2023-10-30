/*
Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

Notes:

If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.

Examples:

loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
*/

const looseChange = function (cents) {
  const obj = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };

  if (cents <= 0) return obj;
  cents = Math.floor(cents);

  obj.Quarters = Math.floor(cents / 25);
  centsAfter25 = cents % 25;
  obj.Dimes = Math.floor(centsAfter25 / 10);
  centsAfter10 = centsAfter25 % 10;
  obj.Nickels = Math.floor(centsAfter10 / 5);
  obj.Pennies = centsAfter10 % 5;

  return obj;
};

console.log(-1, looseChange(-1));
console.log(0, looseChange(0));
console.log(116, looseChange(116));
console.log(41, looseChange(41));
console.log(345, looseChange(345));
console.log(154.2, looseChange(154.2));
console.log(100, looseChange(100));
console.log(15, looseChange(15));
console.log(15.67, looseChange(15.67));
