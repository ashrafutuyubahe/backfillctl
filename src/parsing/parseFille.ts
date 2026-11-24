import fs from "node:fs";
import operationSchema from "../utils/operationValidator.js";
import logger from "../utils/logger.js";
import { exit } from "node:process";
const parseOPerationFile = (rawData: any) => {

  const parsedOperationFile = JSON.parse(rawData);
  let validatedOperationFile;
  try {
    validatedOperationFile = operationSchema.parse(parsedOperationFile);
  } catch (err) {
    logger.error("error occurred", err);
    exit(1);
  }

  return validatedOperationFile;
};

export default parseOPerationFile;
