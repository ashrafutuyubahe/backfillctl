import { Job, Worker } from "bullmq";
import operationFileType from "../types/operationFile.js";

export const notificationWorker = new Worker<operationFileType>(
  "process_operation",
  async (job: Job<operationFileType>) => {
    console.log(job);
  },
);
