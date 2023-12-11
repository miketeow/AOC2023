const fs = require("fs").promises;
const filePath = "input.txt";
async function readLines(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const lines = data.split("\n");

    return lines;
  } catch (error) {
    console.error("Error reading file " + filePath);
  }
}

function getFirstDigit(str) {
  const regex = /one|two|three|four|five|six|seven|eight|nine|[1-9]/;
  const matches = str.match(regex);
  const firstDigit = convertWordsToDigits(matches, false);
  return firstDigit;
}

function getLastDigit(str) {
  const regex = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|[1-9]/;
  const matches = str.match(regex);
  const lastDigit = convertWordsToDigits(matches, true);
  return lastDigit;
}

function convertWordsToDigits(wordArray, reverse) {
  let convertedArray = [];
  const firstWordToDigitMap = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const lastWordToDigits = {
    eno: "1",
    owt: "2",
    eerht: "3",
    ruof: "4",
    evif: "5",
    xis: "6",
    neves: "7",
    thgie: "8",
    enin: "9",
  };
  if (!reverse) {
    convertedArray = wordArray.map((word) => firstWordToDigitMap[word] || word);
  } else {
    convertedArray = wordArray.map((word) => lastWordToDigits[word] || word);
  }
  return convertedArray;
}

const final = () =>
  readLines(filePath).then((lines) => {
    let result = 0;
    let allDigits = 0;
    let firstDigit = 0;
    let lastDigit = 0;
    lines.forEach((line) => {
      firstDigit = getFirstDigit(line);
      lastDigit = getLastDigit(line.split("").reverse().join(""));

      allDigits = firstDigit[0] + lastDigit[0];
      result += Number(allDigits);
    });

    console.log(result);
  });

final();
