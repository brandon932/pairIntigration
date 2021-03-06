var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server/app');

var should = chai.should();
chai.use(chaiHttp);
describe('Blobs', function() {
  it('return 200 on / GET', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
  it('should fail on expected 404 / GET', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
});
