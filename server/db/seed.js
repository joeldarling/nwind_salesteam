var db = require('./index.js');
var SalesMember = db.models.SalesMember;

var seed = function(){

  return db.connect()
  .then(function(){
    //empty dB
    return SalesMember.remove({});
  })
  .then(function(){
    //seed db
    return SalesMember.create({name: 'Joel Darling', regions:['North']});
  });

};

module.exports = seed;
