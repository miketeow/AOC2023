import readLines from "../readFile.js";
const filePath = "input.txt";
function extractInfo(str) {
  const redRegex = /(\d+)\s+(?=\bred\b)/g;
  const greenRegex = /(\d+)\s+(?=\bgreen\b)/g;
  const blueRegex = /(\d+)\s+(?=\bblue\b)/g;
  const gameRegex = /Game (\d+)/;
  const red = str.match(redRegex);
  const green = str.match(greenRegex);
  const blue = str.match(blueRegex);
  const gameId = str.match(gameRegex);
  return { gameId, red, green, blue };
}

function checkCube(id, red, green, blue, redLimit, greenLimit, blueLimit) {
  const gameId = parseInt(id[1], 10);
  const allCubes = [red, green, blue];
  let failed = false;
  for (let i = 0; i < allCubes.length; i++) {
    for (let j = 0; j < allCubes[i].length; j++) {
      if (i === 0) {
        if (allCubes[i][j] > redLimit) {
          failed = true;
        }
      } else if (i === 1) {
        if (allCubes[i][j] > greenLimit) {
          failed = true;
        }
      } else if (i === 2) {
        if (allCubes[i][j] > blueLimit) {
          failed = true;
        }
      }

      if (failed) {
        return 0;
      }
    }
  }
  return gameId;
}

function getPowerSum(red, green, blue) {
  let redMin = Math.max(...red);
  let greenMin = Math.max(...green);
  let blueMin = Math.max(...blue);

  return redMin * greenMin * blueMin;
}

const main = async () => {
  const redLimit = 12;
  const greenLimit = 13;
  const blueLimit = 14;
  let failGameIds = [];
  let totalPowerSum = 0;
  await readLines(filePath).then((res) =>
    res.forEach((line) => {
      const { gameId, red, green, blue } = extractInfo(line);

      let failGameId = checkCube(
        gameId,
        red,
        green,
        blue,
        redLimit,
        greenLimit,
        blueLimit
      );
      failGameIds.push(failGameId);

      totalPowerSum += getPowerSum(red, green, blue);
    })
  );

  const sum = failGameIds.reduce((acc, value) => acc + value);

  console.log("The sum of possible Game Id is " + sum);
  console.log("The total power sum is " + totalPowerSum);
};

main();
