(function () {
  'use strict';

  function configRoutes ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: '/welcome/views/welcome-template.html',
        appMenuItem: {
          text: 'Welcome',
          icon: 'ion-home'
        }
      })
      .state('experiments', {
        url: '/experiments',
        templateUrl: '/experiments/views/experiments-template.html',
        appMenuItem: {
          text: 'Experiments',
          icon: 'ion-erlenmeyer-flask'
        }
      });

    $urlRouterProvider.otherwise('/');
  };

  angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    configRoutes
  ]);

}());
