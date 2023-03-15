const pactum = require('pactum');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe('Pactum test script', () => {
  
  describe("POST /register", () => {
  it('should create a new user and redirect to success page', () => {
     pactum.spec()
        .post("http://localhost:3000/register")
        .withJson({ username: "Rakshith", password: "Rak@123" })
        .end((err, res) => {
          res.should.have.status(302);
          res.should.redirectTo("http://localhost:3000/success");
          done();
        });
  });
});

describe("POST /login", () =>{
  it('should login a user and redirect to secret page',  () => {
       pactum.spec()
        .post("http://localhost:3000/login")
        .withJson({ username: "Rakshith", password: "Rak@123" })
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.include("Secret Page");
          done();
        });
  });
});

  describe("GET /logout", () => {
  it('should log out the user and redirect to home page', async () => {
    await pactum.spec()
    .get("http://localhost:3000/logout")
    .end((err, res) => {
      expect(res).to.have.status(200);
     // expect(res).to.redirectTo("http://localhost:3000/");
      done();
    });
  });});
});



