

import fs from "node:fs";
import parseOPerationFile from "./parsing/parseFille.js";
import operationSchema from "./utils/operationValidator.js";

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

const validOperationFile = parseOPerationFile(rawData);
console.log(validOperationFile)

/* processing Job
  1. we need to initialize a job that will start operation using bullmq
     - establish  agnostic database connection without overloading the db
     -check if tables,columns exist and match what available in db
     -check if the operation is valid on that table(
           ->checking nbr of rows against supplied ones
           ->
      )
     - Begin update operation and keep track of progress and retries using redis 
  2.

*/


