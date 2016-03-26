var expect = require('chai').expect;

var request = require('supertest-as-promised')(require('../server/app/'));

var seed = require('../server/db/seed');

describe('Routes', function(){
  var salesteam;

  beforeEach(function(done){
    seed()
      .then(function(_salesteam){
        salesteam = _salesteam;
        done();
      });

  });

  describe('/', function(){
    it('loads the home page', function(){

      return request.get('/')
        .expect(200)
        .then(function(res){
          expect(res.text).to.contain('Sales');
        });
    });
  });

  describe('/api/team', function(){

    it('can get a list of team members', function(){
      request.get('/api/team')
      .then(function(res){

        expect(res.body.length).to.equal(1);
        expect(res.body[0].name).to.equal('Joel Darling');
      });

    });

    it('can add a new team member', function(){

      request.post('/api/team')
      .send({name: 'Cookie Monster', regions:{North: true, South: false, East: false, West: false}})
      .expect(201)
      .then(function(res){
        expect(res.body.name).to.equal('Cookie Monster');
        expect(res.body.regions.North).to.be.true;
        expect(res.body.regions.South).to.be.false;

      });
    });

    it('can update a team member\'s regions', function(){
      return request.put('/api/team/' + salesteam._id)
      .send({regions:{North: true, South: true, East: true, West: true}})
      .expect(200)
      .then(function(res){
        expect(res.body.regions.East).to.be.true;
      });

    });
    it('can delete a team member', function(){
      return request.delete('/api/team/' + salesteam._id)
      .expect(200)
      .then(function(res){
        expect(res.body.name).to.equal('Joel Darling');
      });

    });




  });
});
