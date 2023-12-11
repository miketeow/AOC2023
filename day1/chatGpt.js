const lines = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

const inputString = "two1nine";
const regex = /(?:[1-9]|one|two|three|four|five|six|seven|eight|nine)/g;
const matches = inputString.match(regex);

function convertWordsToDigits(wordArray) {
  const wordToDigitMap = {
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

  const convertedArray = wordArray.map((word) => wordToDigitMap[word] || word);
  return convertedArray;
}

const result = convertWordsToDigits(matches);
console.log(result); // Output: ["two", "3", "four"]
