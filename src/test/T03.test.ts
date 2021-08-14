import app from "../server";
import request from "supertest";

describe("Posts", () => {
  it("GET /post", async () => {
    await request(app).get("/posts")
      .expect(200)
      .then((response)=>{
        expect(Array.isArray(response.body.result)).toBeTruthy();
      })
  });
});