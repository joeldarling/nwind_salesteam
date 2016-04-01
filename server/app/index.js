var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

module.exports = app;

//setup HTTP logging
//app.use(morgan('dev'));

//setup static routes
app.use('/bootstrap', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.join(__dirname, '../../node_modules/angular')));
app.use(express.static(path.join(__dirname, '../../browser')));

//setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//really why?

//attach router files
app.get('/', function( req, res, next ){

  res.sendFile(path.join(__dirname, '../../../browser/index.html'));

});
app.use('/api/teams', require('./routes/teams'));
