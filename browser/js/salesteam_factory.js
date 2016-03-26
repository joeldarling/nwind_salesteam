app.factory('SalesTeamFactory',function($http, $log){

  return {
    getTeam: function(){
      return $http.get('/api/team');
    }

  };
});
