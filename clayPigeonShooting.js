/*

https://www.codewars.com/kata/clay-pigeon-shooting

Pete and his mate Phil are out in the countryside shooting clay pigeons with a shotgun - amazing fun.

They decide to have a competition. 3 rounds, 2 shots each. Winner is the one with the most hits.

Some of the clays have something attached to create lots of smoke when hit, guarenteed by the packaging to generate 'real excitement!' (genuinely this happened). None of the explosive things actually worked, but for this kata lets say they did.

For each round you will receive the following format:

[{P1:'XX', P2:'XO'}, true]

That is an array containing an object and a boolean. Pl represents Pete, P2 represents Phil. X represents a hit and O represents a miss. If the boolean is true, any hit is worth 2. If it is false, any hit is worth 1.

Find out who won. If it's Pete, return 'Pete Wins!'. If it is Phil, return 'Phil Wins!'. If the scores are equal, return 'Draw!'.

Note that as there are three rounds, the actual input (x) will look something like this:

[[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]


*/

const testData1 = [
  [{ P1: "XX", P2: "0O" }, true],
  [{ P1: "O0", P2: "OO" }, false],
  [{ P1: "00", P2: "XX" }, true],
];
const testData2 = [
  [{ P1: "XX", P2: "0O" }, true],
  [{ P1: "OX", P2: "OO" }, false],
  [{ P1: "0X", P2: "XX" }, true],
];
const testData3 = [
  [{ P1: "XX", P2: "0X" }, true],
  [{ P1: "O0", P2: "OX" }, false],
  [{ P1: "00", P2: "XX" }, true],
];

const determineWinner = function (gameData) {
  const splitAndScore = (str, pts) => {
    let playerPts = 0;
    str.split("").forEach((item) => (item === "X" ? (playerPts += pts) : null));
    return playerPts;
  };

  let petePoints = 0;
  let philPoints = 0;

  gameData.forEach((game) => {
    const [{ P1: pete, P2: phil }, isDouble] = game;
    const pts = isDouble ? 2 : 1;

    petePoints += splitAndScore(pete, pts);
    philPoints += splitAndScore(phil, pts);
  });

  let winner = petePoints > philPoints ? "Pete" : "Phil";
  let message = `${winner} Wins!`;
  if (petePoints == philPoints) message = "Draw!";

  return message;
};

console.log(determineWinner(testData1));
console.log(determineWinner(testData2));
console.log(determineWinner(testData3));
