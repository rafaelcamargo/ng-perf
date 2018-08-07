(function (){
  'use strict';

  describe('Experiments List Controller', () => {
    let controller, routeService, EXPERIMENTS_LIST;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $controller = $injector.get('$controller');
        EXPERIMENTS_LIST = $injector.get('EXPERIMENTS_LIST');
        routeService = $injector.get('routeService');
        controller = $controller('experimentsListController');
      });

      spyOn(routeService, 'go');
    });

    it('should set experiments list on initialize', () => {
      controller.init();
      expect(controller.experimentsList).toEqual(EXPERIMENTS_LIST);
    });

    it('should go to experiment', () => {
      controller.goToExperiment('routeState');
      expect(routeService.go).toHaveBeenCalledWith('routeState');
    })

  });

}());
