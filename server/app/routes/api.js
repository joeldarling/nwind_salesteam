var express = require('express');

var router = express.Router();

var SalesTeam = require('../../db').models.SalesTeam;

module.exports = router;

router.get('/team', function( req, res, next ){

  SalesTeam.find({})
  .then(function(result){
    res.send(result);
  }, next);
});
