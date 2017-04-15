angular.module('roamers')

.controller('homeCtrl', function($scope, $stateParams, homeService){
  
  $scope.createPerson = function(newPerson){
    homeService.createPerson(newPerson).then(function(){
      $scope.newPerson = {};
    });
  };



});
