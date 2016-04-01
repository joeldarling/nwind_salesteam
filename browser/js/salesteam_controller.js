
app.controller('SalesTeamController', function($scope, $log, SalesTeamFactory){

  $scope.inputModel = null;
  $scope.regions = {North: false, South: false, East: false, West: false};
  /// Helper function to get the right sales member from the team array ///
  var getMember = function(id, arr){
    return arr.filter(function(member, i){
      return member._id === id;
    })[0];
  };

  var getTeam = function(){
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
      getTeam();
    }, $log.error);

  };

  $scope.deleteMember = function(memberId){
    SalesTeamFactory.deleteMember(memberId)
    .then(function(result){
      getTeam();
    }, $log.error);
  };

  $scope.toggleRegion = function(region){
    $scope.regions[region] = !$scope.regions[region];//maybe pass in regions, region- then you can reuse
  };

  $scope.toggleRegionMember = function(memberId, region){
    var member = getMember(memberId, $scope.salesTeam);

    member.regions[region] = !member.regions[region];//could you refactor here?

    SalesTeamFactory.updateMember(member)
    .then(function(result){
      getTeam();

    }, $log.error);

  };

  $scope.getActive = function(regions){
    var active = 0;

    for(var region in regions){
      if(regions[region])
        active++;
    }
    return active;
  };

  getTeam();
});


