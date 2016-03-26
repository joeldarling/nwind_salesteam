app.factory('SalesTeamFactory',function($http, $log){

  return {
    getTeam: function(){
      return $http.get('/api/team');
    },
    addMember: function(name, regions){
      return $http.post('/api/team', { name: name, regions: regions });
    },
    updateMember: function(member){
      return $http.put('/api/team/' + member._id, { regions: member.regions });
    },
    deleteMember: function(memberId){
      return $http.delete('api/team/' + memberId);
    },


  };
});
