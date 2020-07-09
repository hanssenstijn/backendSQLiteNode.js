const app = require("../src/app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });
  it("welcomes user to the mockupData", done => {
    chai
      .request(app)
      .get("/api/mockupData")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});