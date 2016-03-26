var http = require('http');
var db = require('./db');
var chalk = require('chalk');


var server = http.createServer(require('./app'));

db.connect()
  .then(function(conn){
    console.log(chalk.green(conn.name));

    var PORT = process.env.PORT || 3000;

    server.listen(PORT, function(){
      console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

  }, function(err){
    console.log(chalk.red(err));
});
