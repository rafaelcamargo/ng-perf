(function (){
  'use strict';

  function experimentsCardDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/experiments/components/experiments-card/experiments-card-template.html'
    }
  }

  angular.module('app').directive('nrExperimentsCard', experimentsCardDirective);

}());
