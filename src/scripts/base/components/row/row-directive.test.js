(function (){
  'use strict';

  describe('Row Directive', () => {
    let scope, element, compile;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        compile = cssClass => {
          scope = $rootScope.$new(true);
          element = angular.element(`<nr-row data-css-class="${cssClass || ''}"></nr-row>`);
          $compile(element)(scope);
          scope.$digest();
        }
      });
    });

    it('should render a row', () => {
      compile();
      expect(element.find('div').attr('class').trim()).toEqual('row');
    });

    it('should optionally render a custom css class', () => {
      compile('custom-row');
      expect(element.find('div').attr('class')).toEqual('row custom-row');
    });

  });

}());
