// const lines = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet", "8451"];
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
function getNumberFromString(str) {
  const regex = /\d/g;
  const matches = str.match(regex);

  return matches;
}

readLines(filePath).then((lines) => {
  let result = 0;
  lines.forEach((line) => {
    const allDigits = getNumberFromString(line);
    //console.log(allDigits);
    const sums = allDigits[0] + allDigits[allDigits.length - 1];
    //console.log(sums);
    result += Number(sums);
  });
  console.log(result);
});
