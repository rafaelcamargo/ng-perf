(function (){
  'use strict';

  function cardDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        icon: '@',
        title: '@'
      },
      controller: function(){},
      controllerAs: '$ctrl',
      bindToController: true,
      templateUrl: '/components/card/card-template.html'
    }
  }

  angular.module('app').directive('nrCard', cardDirective);

}());
