var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var salesTeamSchema = new Schema({

  name: String,
  regions: Schema.Types.Mixed

});


var SalesTeam = mongoose.model('SalesTeam', salesTeamSchema);


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

var disconnect = function(){
  if(!_conn)
    return;

  mongoose.connection.close(function(){
    console.log('conn closed');
  }, console.log);

};


/// EXPORT MODULE ///
module.exports = {
  connect: connect,
  disconnect: disconnect,
  models:{
    SalesTeam: SalesTeam
  }
};
