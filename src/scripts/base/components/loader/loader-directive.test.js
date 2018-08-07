(function (){
  'use strict';

  describe('Loader Directive', () => {
    let scope, element;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        scope = $rootScope.$new(true);
        element = angular.element(`<nr-loader></nr-loader>`);
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should render a loader', () => {
      expect(element.find('div').attr('class')).toEqual('loader');
    });

  });

}());
