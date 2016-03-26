
app.controller('SalesTeamController', function($scope, $log, SalesTeamFactory){

  $scope.inputModel = null;
  $scope.regions = {North: false, South: false, East: false, West: false};

  $scope.getTeam = function(){
    SalesTeamFactory.getTeam()
    .then(function(team){
      $scope.salesTeam = team.data;
    }, $log.error);
  };


  $scope.add = function(){

    SalesTeamFactory.addMember($scope.inputModel.name, $scope.regions)
    .then(function(result){
      $scope.inputModel = null;
      $scope.regions = {North: false, South: false, East: false, West: false};
      $scope.getTeam();
    }, $log.error);

  };

  $scope.deleteMember = function(memberId){
    SalesTeamFactory.deleteMember(memberId)
    .then(function(result){
      $scope.getTeam();
    }, $log.error);
  };

  $scope.toggleRegion = function(region){
    $scope.regions[region] = !$scope.regions[region];
  };

  $scope.toggleRegionMember = function(memberId, region){
    var member = getMember(memberId, $scope.salesTeam);

    member.regions[region] = !member.regions[region];

    SalesTeamFactory.updateMember(member)
    .then(function(result){
      $scope.getTeam();

    },$log.error);

  };

  $scope.getActive = function(regions){
    var active = 0;

    for(var region in regions){
      if(regions[region])
        active++;
    }
    return active;
  };

  $scope.getTeam();
});


/// Helper function to get the right sales member from the team array ///
var getMember = function(id, arr){
  return arr.filter(function(member, i){
    return member._id === id;
  })[0];
};
