(function (){
  'use strict';

  describe('List Directive', () => {
    let scope, element, compile;

    function buildElementMarkup(content){
      return `<nr-list>${content || ''}</nr-list>`;
    }

    function getChildElement(childSelector){
      return getRootElement().querySelector(childSelector);
    }

    function getRootElement(){
      return element.find('div')[0];
    }

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $rootScope = $injector.get('$rootScope');
        const $compile = $injector.get('$compile');

        compile = content => {
          scope = $rootScope.$new(true);
          element = angular.element(buildElementMarkup(content));
          $compile(element)(scope);
          scope.$digest();
        }
      });
    });

    it('should render a card', () => {
      compile();
      expect(getRootElement().getAttribute('class')).toEqual('list');
    });

    it('should transclude content', () => {
      compile('<p>Hello</p>');
      const contentElement = angular.element(getChildElement('p'));
      expect(contentElement.text().trim()).toEqual('Hello');
    });

  });

}());
