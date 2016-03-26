var express = require('express');

var router = express.Router();

module.exports = router;

var path = require('path');


router.get('/', function( req, res, next ){

  res.sendFile(path.join(__dirname, '../../../browser/index.html'));

});
