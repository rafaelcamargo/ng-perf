(function (){
  'use strict';

  function logoDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/base/components/logo/logo-template.html'
    }
  }

  angular.module('app').directive('nrLogo', logoDirective);

}());
