var db = require('./index.js');

var SalesTeam = db.models.SalesTeam;


var seed = function(){
  return db.connect()
  .then(function(){
    //empty dB

    return SalesTeam.remove({});
  })
  .then(function(){
    //seed db
    return SalesTeam.create({name: 'Joel Darling', regions:{North: true}});
  })
  .then(function(result){
    db.disconnect();
  }, console.log);

};

module.exports = seed;
