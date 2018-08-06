(function (){
  'use strict';

  describe('App Menu Directive', () => {
    let scope, element, compile;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');
        scope = $rootScope.$new(true);
        element = angular.element('<nr-app-menu><nr-app-menu>');
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should render menu', () => {
      expect(element.find('div').attr('class')).toEqual('app-menu');
    });

  });

}());
