(function (){
  'use strict';

  function loaderDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/components/loader/loader-template.html'
    }
  }

  angular.module('app').directive('nrLoader', loaderDirective);

}());
