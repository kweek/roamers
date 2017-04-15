angular.module('roamers')
.service('homeService', function($http){

  this.createPerson = function(newPerson){
    return $http.post('/api/emailSignup', newPerson);
  }

});
