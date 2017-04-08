angular.module('roamers')

.controller('applyCtrl', function($scope, $stateParams, applyService){

  // $scope.test = "working";
  $scope.applicant = function(newApplicant){
    console.log(newApplicant);
    applyService.applicant(newApplicant);

  }


});
