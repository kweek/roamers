angular.module('roamers')

.controller('applyCtrl', function($scope, $stateParams, applyService){

  $scope.applicant = function(newApplicant){
    // console.log(newApplicant);
    applyService.applicant(newApplicant).then(function(response){
      console.log(response);
      $scope.newApplicant = {};
    });

  };


});
