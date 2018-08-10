(function (){
  'use strict';

  describe('Memory Overload Card Directive', () => {
    let element;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');
        const scope = $rootScope.$new(true);

        element = angular.element(`<nr-memory-overload-card></nr-memory-overload-card>`);
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should render a card title', () => {
      expect(element.find('nr-card').attr('data-title')).toEqual('Memory Overload');
    });

    it('should render a card icon', () => {
      expect(element.find('nr-card').attr('data-icon')).toEqual('ion-alert-circled');
    });

  });

}());
