app.factory('SalesTeamFactory',function($http, $log){

  var url = '/api/teams/';
  return {
    getTeam: function(){
      return $http.get(url);
    },
    addMember: function(name, regions){
      return $http.post(url, { name: name, regions: regions });
    },
    updateMember: function(member){
      return $http.put(url + member._id, { regions: member.regions });
    },
    deleteMember: function(memberId){
      return $http.delete(url + memberId);
    },


  };
});
