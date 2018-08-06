(function (){
  'use strict';

  function logoDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/components/logo/logo-template.html'
    }
  }

  angular.module('app').directive('nrLogo', logoDirective);

}());
