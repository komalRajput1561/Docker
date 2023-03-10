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




// const { pactum } = require('pactum');
// const { expect } = require('chai');
// const { app } = require('../app');


// describe('Pactum API Test Suite', () => {
//   let server;

//   beforeEach(async () => {
//     server = await pactum.createServer(app);
//     //await pactum.setup();
//     await server.start(server);
//   });

//   afterEach(async () => {
//     await server.close(server);
//    // await pactum.reset();
//   });

//   it('should allow a user to register', async () => {
//     const response = await pactum.request(server)
//       .post('/register')
//       .withJson({
//         username: 'Rakshith',
//         password: 'Rak@123',
//       });
//       console.log(app);

//     expect(response.statusCode).to.eql(200);
//     //expect(response.body).to.have.property('_id');
//     expect(response.body.username).to.eql('Rakshith');
//   });

//   it('should allow a user to login', async () => {
//     const response = await pactum.request(server)
//       .post('/login')
//       .withJson({
//         username: 'Rakshith',
//         password: 'Rak@123',
//       });

//     expect(response.statusCode).to.eql(200);
//     expect(response.body).to.be.empty;
//   });

//   it('should display the secret page if user is authenticated', async () => {
//     const response = await pactum.request(server)
//       .get('/secret')
//       .withCredentials();

//     expect(response.statusCode).to.eql(200);
//     expect(response.body).to.contain('Secret Page');
//   });

//   it('should allow a user to logout', async () => {
//     const response = await pactum.request(server)
//       .get('/logout');

//     expect(response.statusCode).to.eql(302);
//     expect(response.headers.location).to.eql('/');
//   });
// });




// // Define a test suite:
// describe('Pactum API Test Suite', () => {

//   // Start the server before running tests
//   before(async () => {
//     await pactum.setup(); // initialize the pactum library
//     await pactum.server.start(app); // start the server
//   });

//   // Stop the server after running tests
//   after(async () => {
//     await pactum.server.stop(); // stop the server
//     await pactum.reset(); // reset pactum settings
//   });

//   // Define a test case to test the registration API:
//   it('should allow a user to register', async () => {
//     const response = await pactum.spec
//       .post('/register')
//       .withJson({
//         username: 'Rakshith',
//         password: 'Rak@123',
//       })
//       .expectStatus(200);

//     expect(response.body).to.have.property('_id');
//     expect(response.body.username).to.eql('Rakshith');
//   });

//   // Define a test case to test the login API:
//   it('should allow a user to login', async () => {
//     const response = await pactum.spec
//       .post('/login')
//       .withJson({
//         username: 'Rakshith',
//         password: 'Rak@123',
//       })
//       .expectStatus(200);
//     expect(response.body).to.be.empty;
//   });

//   // Define a test case to test the secret page:
//   it('should display the secret page if user is authenticated', async () => {
//     const response = await pactum.spec
//       .get('/secret')
//       .withCredentials()
//       .expectStatus(200);

//     expect(response.text).to.contain('Secret Page');
//   });

//   // Define a test case to test the logout API:
//   it('should allow a user to logout', async () => {
//     const response = await pactum.spec
//       .get('/logout')
//       .expectStatus(302);
//     expect(response.headers.location).to.eql('/');
//   });

// });




// describe("Authentication", () => {
//   it("should create a new user and redirect to success page", async () => {
//     const response = await pactum
//       .request('http://localhost:3000')
//       .post('/register')
//       .withJson({
//         username: "Rakshith",
//         password: "Rak@123"
//       });

//     expect(response.status).to.eql(302);
//     expect(response.headers.location).to.eql('/success');
//   });

//   it("should login a user and redirect to secret page", async () => {
//     const response = await pactum
//       .request('http://localhost:3000')
//       .post('/login')
//       .withJson({
//         username: "Rakshith",
//         password: "Rak@123"
//       });

//     expect(response.status).to.eql(200);
//     expect(response.body).to.contain('Secret Page');
//   });

//   it("should log out the user and redirect to home page", async () => {
//     const response = await pactum
//       .request('http://localhost:3000')
//       .get('/logout');

//     expect(response.status).to.eql(200);
//     // expect(response.headers.location).to.eql('/');
//   });
// });
