(function (){
  'use strict';

  describe('Card Directive', () => {
    let scope, element, compile;

    function buildElementMarkup(bindings = {}, content){
      const title = bindings.title || '';
      const icon = bindings.icon || '';
      return `
        <nr-card data-title="${title}" data-icon="${icon}">
          ${content || ''}
        </nr-card>
      `;
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

        compile = (bindings, content) => {
          scope = $rootScope.$new(true);
          element = angular.element(buildElementMarkup(bindings, content));
          $compile(element)(scope);
          scope.$digest();
        }
      });
    });

    it('should render a card', () => {
      compile();
      expect(getRootElement().getAttribute('class')).toEqual('card');
    });

    it('should render a card title', () => {
      const title = 'Testing Card';
      compile({title});
      const titleElement = angular.element(getChildElement('[data-card-title]'));
      expect(titleElement.text().trim()).toEqual(title);
    });

    it('should title container have appropriate css class', () => {
      compile({title: 'Testing Card'});
      const titleElement = getChildElement('[data-card-title]');
      expect(titleElement.classList.contains('card-title')).toEqual(true);
    });

    it('should render an icon', () => {
      const icon = 'user';
      compile({title: 'Testing Card', icon});
      const iconElement = getChildElement('nr-icon');
      expect(iconElement.getAttribute('data-icon')).toEqual(icon);
    });

    it('should transclude content', () => {
      compile({title: 'Testing Card'}, '<p>Hello</p>');
      const contentElement = angular.element(getChildElement('p'));
      expect(contentElement.text().trim()).toEqual('Hello');
    });

    it('should content container have the appropriate css class', () => {
      compile({title: 'Testing Card'}, '<p>Hello</p>');
      const contentContainerElement = getChildElement('[data-card-content]');
      expect(contentContainerElement.classList.contains('card-content')).toEqual(true);
    });

  });

}());
