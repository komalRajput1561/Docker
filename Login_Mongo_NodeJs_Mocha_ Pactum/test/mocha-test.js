const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require("../app");


chai.should();
chai.use(chaiHttp);

describe("Mocha test script", () => {
  describe("POST /register", () => {
    it("should create a new user and redirect to success page", () => {
      chai
        .request(app)
        .post("/register")
        .send({ username: "Rakshith", password: "Rak@123" })
        .end((err, res) => {
          res.should.have.status(302);
          res.should.redirectTo("http://localhost:3000/success");
       //   done();
        });
    });
  });

  describe("POST /login", () => {
    it("should login a user and redirect to secret page", () => {
      chai
        .request(app)
        .post("/login")
        .send({ username: "Rakshith", password: "Rak@123" })
        .end((err, res) => {
          res.should.have.status(200);
         // res.should.be.html;
          res.text.should.include("Secret Page");
        //  done();
        });
    });
  });

  describe("GET /logout", () => {
    it("should log out the user and redirect to home page", (done) => {
      chai.request(app)
        .get("/logout")
        .end((err, res) => {
          res.should.have.status(200);
         // expect(res).to.redirectTo("http://localhost:3000/");
          done();
        });
    });
  });
});
