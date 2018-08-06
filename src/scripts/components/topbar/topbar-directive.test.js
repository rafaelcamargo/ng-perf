(function (){
  'use strict';

  describe('Topbar Directive', () => {
    let scope, element;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        scope = $rootScope.$new(true);
        element = angular.element(`<nr-topbar></nr-topbar>`);
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should render a topbar', () => {
      expect(element.find('div').attr('class')).toEqual('topbar');
    });

    it('should contain a logo', () => {
      expect(element.find('nr-logo').length).toEqual(1);
    });

    it('should contain an app menu', () => {
      expect(element.find('nr-app-menu').length).toEqual(1);
    });

  });

}());
