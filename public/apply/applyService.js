angular.module('roamers')
.service('applyService', function($http){

  this.applicant = function(newApplicant){
    return $http.post('/api/applicant', newApplicant);
  }

});
