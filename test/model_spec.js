var expect = require('chai').expect;
var seed = require('../server/db/seed');
var SalesMember = require('../server/db').models.SalesMember;

describe('Model', function(){

  beforeEach(function(done){
    seed()
    .then(function(){
      done();
    }, done);

  });

  it('can connect to dB', function(){
    expect(SalesMember).to.be.ok;

  });

  describe('SalesMember', function(){
    var salesTeam;

    beforeEach(function(done){
      SalesMember.find({})
      .then(function(result){
        salesTeam = result;
        done();

      }, done);

    });

    it('Sales member name is Joel', function(){
      expect(salesTeam[0].name).to.contain('Joel');
    });

    it('Joel has regions', function(){
      expect(salesTeam[0].regions.length).to.equal(1);

    });

    describe('create new sales member', function(){
      var newMember = new SalesMember({name: 'Steve', regions:['South']});

      it('can add a new member', function(){
        newMember.save()
        .then(function(result){
            expect(result).to.be.ok;
          });
        });

      });


  });

});
