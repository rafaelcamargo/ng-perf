(function (){
  'use strict';

  describe('Row Item Directive', () => {
    let scope, element, compile;

    function buildElementMarkup(bindings = {}, content){
      const label = bindings.label || '';
      const size = bindings.size || '';
      const cssClass = bindings.cssClass || '';
      const value = bindings.value || '';
      return `
        <nr-row-item
          data-label="${label}"
          data-size="${size}"
          data-css-class="${cssClass}">
          ${content || ''}
        </nr-row-item>
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

        compile = (bindings = {}, content) => {
          scope = $rootScope.$new(true);
          element = angular.element(buildElementMarkup(bindings, content));
          scope.value = bindings.value;
          $compile(element)(scope);
          scope.$digest();
        }
      });
    });

    it('should render a row item', () => {
      compile();
      expect(getRootElement().getAttribute('class').trim()).toEqual('row-item');
    });

    it('should render a row item with a label', () => {
      const label = 'Username';
      compile({label});
      const labelElement = angular.element(getChildElement('[data-row-item-label]'));
      expect(labelElement.text().trim()).toEqual(label);
    });

    it('should render a row item with appropriate label element css class', () => {
      const label = 'Username';
      compile({label});
      const labelElement = getChildElement('[data-row-item-label]');
      expect(labelElement.classList.contains('row-item-label')).toEqual(true);
    });

    it('should render a row item custom css class', () => {
      const cssClass = 'custom';
      compile({cssClass});
      expect(getRootElement().classList.contains('custom')).toEqual(true);
    });

  });

}());
