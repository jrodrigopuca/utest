import app from "../server";
import request from "supertest";

describe("Test con endpoint", () => {
  it("GET /posts", async () => {
    await request(app).get("/posts")
      .expect(200)
      .then((response)=>{
        expect(Array.isArray(response.body.result)).toBeTruthy();
      })
  });
});