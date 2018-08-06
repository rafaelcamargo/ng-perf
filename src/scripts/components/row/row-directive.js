(function (){
  'use strict';

  function rowDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        cssClass: '@'
      },
      controller: function(){},
      controllerAs: '$ctrl',
      bindToController: true,
      templateUrl: '/components/row/row-template.html'
    }
  }

  angular.module('app').directive('nrRow', rowDirective);

}());
