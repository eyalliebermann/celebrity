const expect = require('chai').expect;
const app = require('../server');

const request = require('supertest')(app);

describe('Getting celebritites', () => {
    var url = '/api/v1/celebs/'
    it('returns statu 200', (done) => {
        request
            .get(url)
            .then(function (res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

    it('returns a valid json', (done) => {
        request
            .get(url)
            .then((res) => {
                expect(res.body).to.be.json;
                expect(res.body).length.to.be.greaterThan(0);
                expect(res.body[0].name).to.match(/^[a-zA-Z]*[a-zA-Z ]*[a-zA-Z]*$/);
                done();
            });
    });
});

describe('Adding item', () => {
    it.skip('rejects empty item', (done) => {});
    it.skip('rejects a non english phrase', (done) => {});
    it.skip('rejets duplicate item', (done) => {});
    it.skip('rejects duplicate item the differs on casing', (done) => {});
    it.skip('it rejects the Nth item > 1K', (done) => {});
    it.skip('it rejects a too long item', (done) => {});
    it.skip('it reject a too many words item', (done) => {});
    it.skip('accepts a valid item', (done) => {});
    it.skip('grows the array in one', (done) => {});
    it.skip('adds the item on the end', (done) => {});
});