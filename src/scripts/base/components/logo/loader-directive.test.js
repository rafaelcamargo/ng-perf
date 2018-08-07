(function (){
  'use strict';

  describe('Logo Directive', () => {
    let scope, element;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        scope = $rootScope.$new(true);
        element = angular.element(`<nr-logo></nr-logo>`);
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should render a logo', () => {
      expect(element.find('div').attr('class')).toEqual('logo');
    });

  });

}());
