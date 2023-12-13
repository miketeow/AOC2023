import fs from "fs/promises";
async function readLines(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const lines = data.split("\n");

    return lines;
  } catch (error) {
    console.error("Error reading file " + filePath);
  }
}

export default readLines;
