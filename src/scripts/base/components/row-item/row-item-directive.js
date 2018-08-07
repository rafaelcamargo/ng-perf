(function (){
  'use strict';

  function rowItemDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        label: '@',
        cssClass: '@',
        size: '@',
        value: '='
      },
      controller: 'rowItemController',
      controllerAs: '$ctrl',
      bindToController: true,
      templateUrl: '/base/components/row-item/row-item-template.html',
    }
  }

  angular.module('app').directive('nrRowItem', rowItemDirective);

}());
