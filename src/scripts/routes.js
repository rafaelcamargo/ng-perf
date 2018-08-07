(function () {
  'use strict';

  function configRoutes ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: '/welcome/views/welcome/welcome-template.html',
        appMenuItem: {
          text: 'Welcome',
          icon: 'ion-home'
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
