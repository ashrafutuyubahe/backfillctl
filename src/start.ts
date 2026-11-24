

import fs from "node:fs";
import parseOPerationFile from "./parsing/parseFille.js";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path as an argument.");
  process.exit(1);
} else if (!fs.existsSync(filePath)) {
  console.log("File does not exist at the provided path:", filePath);
  process.exit(1);
}

const rawData = fs.readFileSync(filePath, "utf-8");
// console.log("Raw data from the file:", rawData);

parseOPerationFile(rawData);




