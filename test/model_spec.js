var expect = require('chai').expect;
var seed = require('../server/db/seed');
var db = require('../server/db');
var SalesTeam = db.models.SalesTeam;

describe('Model', function(){

  beforeEach(function(done){
    seed()
    .then(function(){
      done();
    }, done);

  });

  describe('SalesMember', function(){
    var salesTeam;

    beforeEach(function(done){
      db.connect()
      .then(function(){
        return SalesTeam.find({});
      }, done)
      .then(function(result){
        salesTeam = result;
        done();

      }, done);

    });

    it('Sales member name is Joel', function(){
      expect(salesTeam[0].name).to.contain('Joel');
    });

    it('Joel has regions', function(){
      expect(salesTeam[0].regions).to.ok;

    });

    describe('create new sales member', function(){
      var newMember = new SalesTeam({name: 'Steve'});

      it('can add a new member', function(){
        newMember.save()
        .then(function(result){
            expect(result).to.be.ok;
          });
        });

      });


  });

});
