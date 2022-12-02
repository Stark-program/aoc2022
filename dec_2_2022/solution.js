var fs = require("fs");

require.extensions[".txt"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

var rpsStrategy = require("./input.txt");

// 1 point for rock
// 2 points for paper
// 3 points for scissors

// 0 points if you lose
// 3 if the round is a draw
// 6 points if you win

// A is for rock
// B is for paper
// C is for scissors

// X is for rock
// Y is for paper
// Z is for scissors

const rpsStrategyArr = rpsStrategy.split(/\r?\n/);

// Part One

function partOne() {
  const points = [];
  for (var i = 0; i < rpsStrategyArr.length; i++) {
    let matchPoints = 0;
    let match = rpsStrategyArr[i].split(" ");
    let opponent = match[0];
    let user = match[1];
    if (user === "X") {
      matchPoints += 1;
    } else if (user === "Y") {
      matchPoints += 2;
    } else if (user === "Z") {
      matchPoints += 3;
    }

    if (opponent === "A" && user === "X") {
      matchPoints += 3;
    } else if (opponent === "B" && user === "Y") {
      matchPoints += 3;
    } else if (opponent === "C" && user === "Z") {
      matchPoints += 3;
    }

    if (opponent === "A" && user === "Y") {
      matchPoints += 6;
    } else if (opponent === "B" && user === "Z") {
      matchPoints += 6;
    } else if (opponent === "C" && user === "X") {
      matchPoints += 6;
    }
    points.push(matchPoints);
  }

  const sum = points.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(partOne());

// Part Two

// 1 point for rock
// 2 points for paper
// 3 points for scissors

// 0 points if you lose
// 3 if the round is a draw
// 6 points if you win

// A is for rock
// B is for paper
// C is for scissors

// X means you need to lose
// Y means you need to end the round in a draw
// Z means you need to win

function partTwo() {
  const points = [];
  for (var i = 0; i < rpsStrategyArr.length; i++) {
    let matchPoints = 0;
    let match = rpsStrategyArr[i].split(" ");
    let opponent = match[0];
    let decision = match[1];

    if (decision === "X") {
      if (opponent === "A") {
        matchPoints += 3;
      } else if (opponent === "B") {
        matchPoints += 1;
      } else {
        matchPoints += 2;
      }
    } else if (decision === "Y") {
      if (opponent === "A") {
        matchPoints += 4;
      } else if (opponent === "B") {
        matchPoints += 5;
      } else {
        matchPoints += 6;
      }
    } else {
      if (opponent === "A") {
        matchPoints += 8;
      } else if (opponent === "B") {
        matchPoints += 9;
      } else {
        matchPoints += 7;
      }
    }
    points.push(matchPoints);
  }

  const sum = points.reduce((a, b) => a + b, 0);
  return sum;
}
console.log(partTwo());
