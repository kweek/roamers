// for homepage background image to go over nav
// goes along with homeheader.html and genericheader.html
angular.module('roamers')
.controller('headerCtrl', function($scope, $location){
  $scope.$on('$locationChangeSuccess', function(){
    var path = $location.path();
    $scope.templateUrl = (path==='/') ? './homeHeader.html' : './genericHeader.html' ;
  });
});
