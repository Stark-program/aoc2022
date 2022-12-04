var fs = require("fs");

require.extensions[".txt"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

var ruckSack = require("./input.txt");

var ruckSackArr = ruckSack.split(/\r?\n/);

const priorityIndexValue = [
  0,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// part one

function partOne() {
  const priorityArr = [];

  for (var i = 0; i < ruckSackArr.length; i++) {
    let rucksackCutInHalf = ruckSackArr[i].length / 2;
    let firstHalf = ruckSackArr[i].slice(0, rucksackCutInHalf);
    let secondHalf = ruckSackArr[i].slice(rucksackCutInHalf);
    let similarLetter = compareTwoStrings(firstHalf, secondHalf);
    let letterValue = priorityIndexValue.indexOf(similarLetter);
    priorityArr.push(letterValue);
  }
  const sum = priorityArr.reduce((a, b) => a + b, 0);
  return sum;
}

function compareTwoStrings(stringOne, stringTwo) {
  for (var i = 0; i < stringOne.length; i++) {
    for (var j = 0; j < stringTwo.length; j++) {
      if (stringOne[i] === stringTwo[j]) {
        return stringOne[i];
      }
    }
  }
}
console.log(partOne());

// part two

function partTwo() {
  let priorityArr = [];
  for (var z = 0; z < ruckSackArr.length; z += 3) {
    firstString = ruckSackArr[z];
    secondString = ruckSackArr[z + 1];
    thirdString = ruckSackArr[z + 2];
    let similarLetter = compareThreeStrings(
      firstString,
      secondString,
      thirdString
    );
    let letterValue = priorityIndexValue.indexOf(similarLetter);
    priorityArr.push(letterValue);
  }
  const sum = priorityArr.reduce((a, b) => a + b, 0);
  return sum;
}
function compareThreeStrings(stringOne, stringTwo, stringThree) {
  for (var i = 0; i < stringOne.length; i++) {
    for (var j = 0; j < stringTwo.length; j++) {
      for (var k = 0; k < stringThree.length; k++)
        if (
          stringOne[i] === stringTwo[j] &&
          stringOne[i] === stringThree[k] &&
          stringTwo[j] === stringThree[k]
        ) {
          return stringOne[i];
        }
    }
  }
}
console.log(partTwo());
