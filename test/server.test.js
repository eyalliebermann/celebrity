const expect = require('chai').expect;
const app = require('../server');

const request = require('supertest')(app);

describe('Getting celebritites', () => {
    let url = '/api/v1/celebs/'
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
    let url = '/api/v1/celebs/'

    it('rejects empty string', (done) => {
        request
            .post(url)
            .send('')
            .expect(400)
            .expect({
                status: 'BadInput'
            }, done);
    });

    it('rejects empty string', (done) => {
        request
            .post(url)
            .send({})
            .expect(400)
            .expect({
                status: 'BadInput'
            }, done);
    });

    it('rejects a non english phrase', (done) => {
        request.post(url)
            .send({
                name: 'אבגד'
            })
            .expect(400)
            .expect({
                status: 'BadInput'
            }, done);
    });

    it('rejets duplicate item', (done) => {
        request.post(url)
            .send({
                name: 'Duplicate Item'
            })
            .expect(200)
            .then(() => {
                request.post(url)
                    .send({
                        name: 'Duplicate Item'
                    })
                    .expect(409)
                    .expect({
                        status: 'ConflictingInput'
                    }, done);
            });

    });
    
    it.skip('rejects duplicate item the differs on casing', (done) => {});
    it.skip('it rejects the Nth item > 1K', (done) => {});
    it.skip('it rejects a too long item', (done) => {});
    it.skip('it reject a too many words item', (done) => {});
    it.skip('accepts a valid item', (done) => {});
    it.skip('grows the array in one', (done) => {});
    it.skip('adds the item on the end', (done) => {});
});