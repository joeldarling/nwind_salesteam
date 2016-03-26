app.controller('SalesTeamController', function($scope, $log, SalesTeamFactory){

  $scope.inputModel;

  $scope.getTeam = function(){
    SalesTeamFactory.getTeam()
    .then(function(team){
      console.log(team.data);
      $scope.salesTeam = team.data;
    }, $log.error);
  };


  $scope.add = function(){

    SalesTeamFactory.addMember($scope.inputModel.name)
    .then(function(result){
      $scope.inputModel = null;
      $scope.getTeam();
    }, $log.error);

  };

  $scope.getTeam();

});
