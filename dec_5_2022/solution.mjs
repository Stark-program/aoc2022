import { readFileSync } from "node:fs";

var input = readFileSync("input.txt", "utf-8").replace(/\r/g, "").trimEnd();

const [rawStacks, rawMoves] = input.split("\n\n");

const parsedStacks = rawStacks
  .split("\n")
  .map((line) => [...line].filter((value, index) => index % 4 === 1));

const stackNumber = parsedStacks.pop();

const stacks = {};

for (const line of parsedStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") {
      if (!stacks[stackNumber[i]]) {
        stacks[stackNumber[i]] = [];
      }
      stacks[stackNumber[i]].unshift(line[i]);
    }
  }
}

const moves = [];

for (const line of rawMoves.split("\n")) {
  const match = /move (\d+) from (\d+) to (\d+)/g.exec(line);
  moves.push({
    count: parseInt(match[1]),
    from: parseInt(match[2]),
    to: parseInt(match[3]),
  });
}

function readMove(stacks, move) {
  let count = move.count;
  let from = move.from;
  let to = move.to;
  for (let i = 0; i < count; i++) {
    stacks[to].push(stacks[from].pop());
  }
}

function partOne() {
  const localStacks = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    readMove(localStacks, move);
  }
  return localStacks;
}

console.log(partOne());

function partTwoReadMove(stacks, move) {
  let count = move.count;
  let from = move.from;
  let to = move.to;
  let cratesRemoved = stacks[from].splice(-count, count);
  stacks[to].push(...cratesRemoved);
}

function partTwo() {
  const localStacks = JSON.parse(JSON.stringify(stacks));
  for (const move of moves) {
    partTwoReadMove(localStacks, move);
  }
  return localStacks;
}
console.log(partTwo());
