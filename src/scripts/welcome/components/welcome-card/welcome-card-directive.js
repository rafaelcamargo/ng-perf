(function (){
  'use strict';

  function welcomeCardDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/welcome/components/welcome-card/welcome-card-template.html'
    }
  }

  angular.module('app').directive('nrWelcomeCard', welcomeCardDirective);

}());
