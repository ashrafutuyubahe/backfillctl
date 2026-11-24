import fs from "node:fs";
import operationSchema from "../utils/operationValidator.js";
import logger from "../utils/logger.js";
import { exit } from "node:process";
const parseOPerationFile = (rawData: any) => {
  console.log(rawData);

  const parsedOperationFile = JSON.parse(rawData);
  let validOperationFile;
  try {
    validOperationFile = operationSchema.parse(parsedOperationFile);
  } catch (err) {
    logger.error("error occurred", err);
    exit(1);
  }
  console.log("Parsed operation file:", validOperationFile);
};

export default parseOPerationFile;
