(function (){
  'use strict';

  function memoryOverloadCardDirective(){
    return {
      restrict: 'E',
      scope: {},
      controller: 'memoryOverloadCardController',
      controllerAs: '$ctrl',
      bindToController: true,
      templateUrl: '/base/components/memory-overload-card/memory-overload-card-template.html',
    }
  }

  angular.module('app').directive('nrMemoryOverloadCard', memoryOverloadCardDirective);

}());
