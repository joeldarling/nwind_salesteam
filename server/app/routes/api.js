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

router.get('/team/:id', function ( req, res, next ){
  SalesTeam.findOne({_id: req.params.id})
  .then(function(result){
    res.send(result);
  }, next);
});

router.post('/team', function( req, res, next){
  var newMember = new SalesTeam({name:req.body.name, regions: req.body.regions});

  newMember.save()
  .then(function(result){
    res.send(result);
  }, next);
});

router.put('/team/:id', function( req, res, next ){
  SalesTeam.findOne({_id: req.params.id})
  .then(function(member){
    console.log('ROUTE:',req.body.regions)
    member.regions = req.body.regions;
    return member.save();
  })
  .then(function(result){
    res.send(result);
  }, next);
});

router.delete('/team/:id', function( req, res, next ){
  SalesTeam.findOneAndRemove({_id: req.params.id})
  .then(function(result){
    res.send(result);
  }, next);
});
