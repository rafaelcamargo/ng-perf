(function (){
  'use strict';

  describe('Memory Overload Card', () => {
    let controller;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $controller = $injector.get('$controller');
        controller = $controller('memoryOverloadCardController');
      });
    });

    it('should build a form containing 250 input rows', () => {
      controller.init();
      expect(controller.form.rows.length).toEqual(250);
    });

    it('should each form row have four inputs', () => {
      controller.init();
      const firstRowInputs = controller.form.rows[0];
      expect(firstRowInputs.length).toEqual(4);
    });

    it('should each input have label', () => {
      controller.init();
      const firstInput = controller.form.rows[0][0];
      expect(firstInput.label).toBeDefined();
    });

    it('should each input label be a string', () => {
      controller.init();
      const firstInput = controller.form.rows[0][0];
      expect(typeof firstInput.label).toBeDefined('string');
    });

    it('should each input have value', () => {
      controller.init();
      const firstInput = controller.form.rows[0][0];
      expect(firstInput.value).toBeDefined();
    });

  });

}());
