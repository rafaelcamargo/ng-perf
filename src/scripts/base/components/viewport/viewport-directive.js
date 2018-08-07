(function (){
  'use strict';

  function viewportDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: '/base/components/viewport/viewport-template.html',
    }
  }

  angular.module('app').directive('nrViewport', viewportDirective);

}());
