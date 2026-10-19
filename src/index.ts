import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import logger from "./utils/logger.js";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/health", (req, res) => {
  logger.info("Root route hit successfully");
  res.send("the app is running successfully");
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "server is running successfully" });
});
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}......`);
});

export default app;
