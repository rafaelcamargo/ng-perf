(function (){
  'use strict';

  describe('Row Item', () => {
    let controller;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $controller = $injector.get('$controller');
        controller = $controller('rowItemController');
      });
    });

    it('should set custom size to the row item if size is provided', () => {
      controller.size = 3;
      controller.init();
      expect(controller.sizeCssClass).toEqual('row-item-size-3');
    });

    it('should not set size to the row if no size is provided', () => {
      controller.init();
      expect(controller.sizeCssClass).toEqual('');
    });

  });

}());
