var expect = require('chai').expect;
var request = require('request');
describe('Getting celebritites',function(){
    var url='http://localhost/3000/api/v1/celebs'
    it('returns statu 200',function(){
        request(url,function(err,res,body){
            expect(response.statusCode).to.equal(200);
        })
    });
});