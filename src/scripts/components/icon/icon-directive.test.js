(function (){
  'use strict';

  describe('Icon Directive', () => {
    let scope, element, compile;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        compile = icon => {
          scope = $rootScope.$new(true);
          element = angular.element(`<nr-icon data-icon="${icon}"></nr-icon>`);
          $compile(element)(scope);
          scope.$digest();
        }
      });
    });

    it('should render an icon', () => {
      compile('user');
      expect(element.find('i').attr('class')).toEqual('icon user');
    });

  });

}());
