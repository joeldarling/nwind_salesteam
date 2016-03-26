var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var salesMemberSchema = new Schema({

  name: String,
  regions: [String]

});


var SalesMember = mongoose.model('SalesMember', salesMemberSchema);


/// SETUP MONGOOSE CONNECTION ///

var _conn;

var connect = function(){

  if(_conn)
    return _conn;

  _conn = new Promise(function(resolve, reject){

    mongoose.connect(process.env.CONN || 'mongodb://localhost/nwind_salesteam_db', function(err){
      if(err)
        return reject(err);
      resolve(mongoose.connection);
    });
  });

  return _conn;
};


/// EXPORT MODULE ///
module.exports = {
  connect: connect,
  models:{
    SalesMember: SalesMember
  }
};
