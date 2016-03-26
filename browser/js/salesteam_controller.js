app.controller('SalesTeamController', function($scope, $log, SalesTeamFactory){

  SalesTeamFactory.getTeam()
  .then(function(team){
    $scope.salesTeam = team.data;
  }, $log.error);

});
