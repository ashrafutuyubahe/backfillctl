import app from "../index.js";
import request from "supertest";

describe("GET /", () => {
  it("should return 200 OK and success status", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
  });
});
