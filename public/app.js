angular.module('roamers', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){
      $stateProvider
          .state('home', {
            url: '/',
            templateUrl: './public/home/home.html',
            controller: 'homeCtrl',
          })
          .state('howItWorks', {
            url: '/howItWorks',
            templateUrl: './public/howItWorks/howItWorks.html',
            controller: 'hitCtrl',
          })
          .state('itinerary', {
            url: '/itinerary',
            templateUrl: './public/itinerary/itinerary.html',
            controller: 'itinCtrl',
          })
          .state('followUs', {
            url: '/followUs',
            templateUrl: './public/followUs/followUs.html',
            controller: 'followUsCtrl',
          })
          .state('apply', {
            url: '/apply',
            templateUrl: './public/apply/apply.html',
            controller: 'applyCtrl',
          })
          .state('charity', {
            url: '/charity',
            templateUrl: './public/makeADifference/charity.html',
            controller: 'charityCtrl',
          })

  });
