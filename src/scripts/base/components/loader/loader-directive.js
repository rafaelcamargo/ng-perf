(function (){
  'use strict';

  function loaderDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/base/components/loader/loader-template.html'
    }
  }

  angular.module('app').directive('nrLoader', loaderDirective);

}());
