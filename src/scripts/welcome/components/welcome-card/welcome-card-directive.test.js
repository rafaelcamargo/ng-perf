(function (){
  'use strict';

  describe('Welcome Card Directive', () => {
    let element;

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');
        const scope = $rootScope.$new(true);

        element = angular.element(`<nr-welcome-card></nr-welcome-card>`);
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('should render a card title', () => {
      expect(element.find('nr-card').attr('data-title')).toEqual('Welcome');
    });

    it('should render a card icon', () => {
      expect(element.find('nr-card').attr('data-icon')).toEqual('ion-home');
    });

  });

}());
