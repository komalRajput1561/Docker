const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "http://localhost:5000/login";
const util = require("util");

describe('login', function() {
    it('Should success if credential is valid', function(done) {
        request.post({ url: baseUrl + '/login' },
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
            		expect(bodyObj.username).to.equal("Rak");
            		expect(bodyObj.password).to.equal("rak@123");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});