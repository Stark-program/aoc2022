var fs = require("fs");

require.extensions[".txt"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

var sectionIds = require("./input.txt");

var sectionIdsArr = sectionIds.split(/\r?\n/);

function partOne() {
  let count = 0;

  for (var i = 0; i < sectionIdsArr.length; i++) {
    let section = sectionIdsArr[i].split(",");
    let sectionOne = section[0].split("-");
    let sectionTwo = section[1].split("-");
    let sectionOneParse = sectionOne.map((num) => {
      return parseInt(num);
    });
    let sectionTwoParse = sectionTwo.map((num) => {
      return parseInt(num);
    });
    let sectionOneFirstNumber = sectionOneParse[0];
    let sectionOneSecondNumber = sectionOneParse[1];
    let sectionTwoFirstNumber = sectionTwoParse[0];
    let sectionTwoSecondNumber = sectionTwoParse[1];

    if (
      sectionOneFirstNumber <= sectionTwoFirstNumber &&
      sectionOneSecondNumber >= sectionTwoSecondNumber
    ) {
      count++;
    } else if (
      sectionTwoFirstNumber <= sectionOneFirstNumber &&
      sectionTwoSecondNumber >= sectionOneSecondNumber
    ) {
      count++;
    }
  }
  return count;
}

console.log(partOne());

// part two

function partTwo() {
  let count = 0;

  for (var i = 0; i < sectionIdsArr.length; i++) {
    let section = sectionIdsArr[i].split(",");
    let sectionOne = section[0].split("-");
    let sectionTwo = section[1].split("-");
    let sectionOneParse = sectionOne.map((num) => {
      return parseInt(num);
    });
    let sectionTwoParse = sectionTwo.map((num) => {
      return parseInt(num);
    });
    let sectionOneFirstNumber = sectionOneParse[0];
    let sectionOneSecondNumber = sectionOneParse[1];
    let sectionTwoFirstNumber = sectionTwoParse[0];
    let sectionTwoSecondNumber = sectionTwoParse[1];

    if (
      sectionOneFirstNumber <= sectionTwoFirstNumber &&
      sectionOneSecondNumber >= sectionTwoSecondNumber
    ) {
      count++;
    } else if (
      sectionTwoFirstNumber <= sectionOneFirstNumber &&
      sectionTwoSecondNumber >= sectionOneSecondNumber
    ) {
      count++;
    } else if (
      sectionOneFirstNumber > sectionTwoFirstNumber &&
      sectionOneFirstNumber <= sectionTwoSecondNumber
    ) {
      count++;
    } else if (
      sectionTwoFirstNumber >= sectionOneFirstNumber &&
      sectionTwoFirstNumber <= sectionOneSecondNumber
    ) {
      count++;
    }
  }
  return count;
}
console.log(partTwo());
