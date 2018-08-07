(function (){
  'use strict';

  describe('Viewport Directive', () => {
    let scope, element, compile;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        compile = content => {
          scope = $rootScope.$new(true);
          element = angular.element(`<nr-viewport>${content}</nr-viewport>`);
          $compile(element)(scope);
          scope.$digest();
        }
      });
    });

    it('should render a viewport', () => {
      compile();
      expect(element.find('div').attr('class')).toEqual('viewport');
    });

    it('should contain a topbar', () => {
      compile();
      expect(element.find('nr-topbar').length).toEqual(1);
    });

    it('should transclude some content', () => {
      compile('<h1>Hello</h1>');
      expect(element.find('h1').text().trim()).toEqual('Hello');
    });

  });

}());
