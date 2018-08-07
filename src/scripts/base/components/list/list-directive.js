(function (){
  'use strict';

  function listDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: '/base/components/list/list-template.html'
    }
  }

  angular.module('app').directive('nrList', listDirective);

}());
