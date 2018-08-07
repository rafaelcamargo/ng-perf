(function (){
  'use strict';

  function experimentsListController(EXPERIMENTS_LIST, routeService){
    const $ctrl = this;

    $ctrl.init = () => {
      setExperimentList(EXPERIMENTS_LIST);
    };

    $ctrl.goToExperiment = routeState => {
      routeService.go(routeState);
    };

    function setExperimentList(list){
      $ctrl.experimentsList = list;
    }

    $ctrl.init();
  }

  angular.module('app').controller('experimentsListController', [
    'EXPERIMENTS_LIST',
    'routeService',
    experimentsListController
  ]);

}());
