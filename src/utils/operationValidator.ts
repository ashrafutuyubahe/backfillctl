import { table } from "node:console";
import { z } from "zod";

const operationSchema = z.object({
  name: z.string().min(2).max(100),
  table: z.string().min(3).max(100),
  key: z.string().min(2).max(10),
  set: z
    .string()
    .min(3)
    .max(100)
    .includes("=", { message: "database operation should contain = sign" })
    .refine(
      (val) =>
        val.includes(":") ||
        val.includes("||") ||
        val.includes("&&") ||
        val.includes("!=") ||
        val.includes(">") ||
        val.includes("<") ||
        val.includes(">=") ||
        val.includes("<=") ||
        val.includes("$"),
      {
        message:
          "database operation should contain at least one of the following: : , || , && , != , > , < , >= , <= , $",
      },
    )
    .refine(
      (val) =>
        !val.includes("DROP") &&
        !val.includes("DELETE") &&
        !val.includes("TRUNCATE") &&
        !val.includes("INSERT"),
      {
        message:
          "database operation should not contain any of the following: DROP , DELETE , TRUNCATE , ALTER , UPDATE , INSERT",
      },
    ),

 where:z.string().min(10).max(100),
 batch: z.object({
    size: z.number().min(1).max(1000),
    delayMs: z.number().min(0).max(10000).default(2),
  }),
});

export default operationSchema;
