angular.module('roamers')
.service('homeService', function(){

  this.createPerson = function(newPerson){
    return $http.post('path...', newPerson)
  }

});
