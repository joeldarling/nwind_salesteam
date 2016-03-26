app.factory('SalesTeamFactory',function($http, $log){

  return {
    getTeam: function(){
      return $http.get('/api/team');
    },
    addMember: function(name){
      return $http.post('/api/team', { name: name });
    }

  };
});
