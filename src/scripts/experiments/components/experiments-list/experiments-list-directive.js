(function (){
  'use strict';

  function experimentsListDirective(){
    return {
      restrict: 'E',
      scope: {},
      controller: 'experimentsListController',
      controllerAs: '$ctrl',
      bindToController: true,
      templateUrl: '/experiments/components/experiments-list/experiments-list-template.html'
    }
  }

  angular.module('app').directive('nrExperimentsList', experimentsListDirective);

}());
