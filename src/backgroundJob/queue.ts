import { Queue } from "bullmq";
import operationFileType from "../types/operationFile.js";
import { redisConnection } from "./connection.js";


const OperationQueue= new Queue<operationFileType>(
    "process_operation",
    {
        connection:redisConnection,
        defaultJobOptions:{
            removeOnComplete:true,
            removeOnFail:true
        }
    }


)