(function (){
  'use strict';

  function viewportDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: '/components/viewport/viewport-template.html',
    }
  }

  angular.module('app').directive('nrViewport', viewportDirective);

}());
