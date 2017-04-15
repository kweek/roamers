angular.module('roamers', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){
      $stateProvider
          .state('home', {
            url: '/',
            templateUrl: './home/home.html',
            controller: 'homeCtrl',
          })
          .state('howItWorks', {
            url: '/howItWorks',
            templateUrl: './howItWorks/howItWorks.html',
            controller: 'hitCtrl',
          })
          .state('itinerary', {
            url: '/itinerary',
            templateUrl: './itinerary/itinerary.html',
            controller: 'itinCtrl',
          })
          .state('followUs', {
            url: '/followUs',
            templateUrl: './followUs/followUs.html',
            controller: 'followUsCtrl',
          })
          .state('apply', {
            url: '/apply',
            templateUrl: './apply/apply.html',
            controller: 'applyCtrl',
          })
          .state('faq', {
            url: '/faq',
            templateUrl: './faq/faq.html',
            controller: 'faqCtrl',
          })


  })
  .controller('mainCtrl', function($scope, homeService){
    $scope.createPerson = function(newPerson){
      homeService.createPerson(newPerson).then(function(response){
        console.log(response);
        $scope.newPerson = {};
      });
    };
  })
