const request = require("supertest");
const app = require("./app");

describe("API Tests", () => {
  test("GET / should return Hello, World! message", async () => {
    const response = await request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({ message: "Hello, World!" });
  });
});
