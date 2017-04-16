var expect = require('chai').expect;
var app = require('../server');

var request = require('supertest')(app);

describe('Getting celebritites', function () {
    var url = '/api/v1/celebs/'
    it('returns statu 200', function (done) {
        request
        .get(url)
        .then( function (res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('returns a valid json', function (done) {
        request
        .get(url)
        .then( function (res) {
            expect(res.body).to.be.json;
            expect(res.body).length.to.be.greaterThan(0);
            expect(res.body[0].name).to.match(/^[a-zA-Z]*[a-zA-Z ]*[a-zA-Z]*$/);
            done();
        });
    });
});