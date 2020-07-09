const app = require("../src/app");
const chai = require("chai");
const chaiHttp = require("chai-http");
should = chai.should();

const { getRowData } = require('../src/controllers/specificRowsCon');

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
  it("Checks status off mockupData api", done => {
    chai
      .request(app)
      .get("/api/mockupData")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Checks reponse data api rowData", done => {
    chai
      .request(app)
      .get("/api/rowData")
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.should.have.property('inhabitants');
        res.body.should.have.property('name').eql('Noord-Brabant');
        res.body.should.have.property('inhabitants').eql('2563432');
        done();
      });
  });
});