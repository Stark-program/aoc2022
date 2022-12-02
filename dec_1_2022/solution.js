var fs = require("fs");

require.extensions[".txt"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

var calories = require("./input.txt");

const caloriesArr = calories.split(/\r?\n/);

// PART ONE
function partOne() {
  var totalArr = [];

  var count = 0;

  for (var i = 0; i < caloriesArr.length; i++) {
    if (caloriesArr[i] == "") continue;
    var stringToNumber = parseFloat(caloriesArr[i]);
    count += stringToNumber;
    if (caloriesArr[i + 1] == "") {
      totalArr.push(count);
      count = 0;
    }
  }

  return Math.max(...totalArr);
}
console.log(partOne());

// PART TWO
function partTwo() {
  var totalArr = [];

  var count = 0;

  for (var i = 0; i < caloriesArr.length; i++) {
    if (caloriesArr[i] == "") continue;
    var stringToNumber = parseFloat(caloriesArr[i]);
    count += stringToNumber;
    if (caloriesArr[i + 1] == "") {
      totalArr.push(count);
      count = 0;
    }
  }
  totalArr.sort((a, b) => b - a);
  return totalArr[0] + totalArr[1] + totalArr[2];
}
console.log(partTwo());
