(function (){
  'use strict';

  describe('Experiments List Directive', () => {
    let scope, element;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        scope = $rootScope.$new(true);
        element = angular.element('<nr-experiments-list></nr-experiments-list>');
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should contain a list', () => {
      expect(element.find('nr-list').length).toEqual(1);
    });

  });

}());
