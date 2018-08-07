(function (){
  'use strict';

  describe('Experiments Card Directive', () => {
    let element;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');
        const scope = $rootScope.$new(true);

        element = angular.element(`<nr-experiments-card></nr-experiments-card>`);
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should render a card title', () => {
      expect(element.find('nr-card').attr('data-title')).toEqual('Experiments');
    });

    it('should render a card icon', () => {
      expect(element.find('nr-card').attr('data-icon')).toEqual('ion-erlenmeyer-flask');
    });

    it('should contain an experiments list', () => {
      expect(element.find('nr-experiments-list').length).toEqual(1);
    });

  });

}());
