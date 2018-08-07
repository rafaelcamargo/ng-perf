(function (){
  'use strict';

  function iconDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        icon: '@'
      },
      controller: function(){},
      controllerAs: '$ctrl',
      bindToController: true,
      templateUrl: '/base/components/icon/icon-template.html'
    }
  }

  angular.module('app').directive('nrIcon', iconDirective);

}());
