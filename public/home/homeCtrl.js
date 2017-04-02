angular.module('roamers')

.controller('homeCtrl', function($scope, $stateParams, homeService){
  // $scope.test = "WORKING::: YEAH!!";
  $scope.createPerson = function(newPerson){
    homeService.createPerson(newPerson);
  };

});
