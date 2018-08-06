(function (){
  'use strict';

  describe('App Menu', () => {
    let $rootScope,
      $eventMock,
      controller,
      routeService,
      routesMock;

    function buildRoutesMock(){
      return [{
        name: ''
      }, {
        name: 'accounts',
        appMenuItem: {
          text: 'Contas',
          cancelNavigation: true
        }
      }, {
        name: 'accounts.list',
        appMenuItem: {
          nested: true,
          parentName: 'accounts',
          text: 'Lista de Contas'
        }
      }, {
        name: 'accounts.migration',
        appMenuItem: {
          nested: true,
          parentName: 'accounts',
          text: 'Migração de Contas'
        }
      }, {
        name: 'coupons',
        appMenuItem: {
          text: 'Cupons'
        }
      }, {
        name: 'coupons.list',
        appMenuItem: {
          nested: true,
          parentName: 'coupons',
          text: 'Lista de Cupons'
        }
      }, {
        name: 'finance',
        appMenuItem: {
          text: 'Financeiro'
        }
      }];
    }

    function buildEventMock(){
      return {
        stopImmediatePropagation: jasmine.createSpy()
      };
    }

    function stubRouteServiceMethod(method, mockedRouteName){
      spyOn(routeService, method).and.callFake(routeName => {
        return routeName == mockedRouteName
      });
    }

    beforeEach(() => {
      module('app');
      inject(function($injector){
        const $controller = $injector.get('$controller');
        $rootScope = $injector.get('$rootScope');
        routeService = $injector.get('routeService');
        controller = $controller('appMenuController');
      });
      routesMock = buildRoutesMock();
      $eventMock = buildEventMock();
      spyOn(routeService, 'go');
      spyOn(routeService, 'getRoutes').and.returnValue(routesMock);
    });

    it('should config items on initialization', () => {
      stubRouteServiceMethod('includesRoute', 'accounts');
      controller.init();
      expect(controller.items).toEqual([{
        text: 'Contas',
        routeName: 'accounts',
        selectedCssClass: 'app-menu-item-selected',
        cancelNavigation: true,
        nest: [{
          nested: true,
          parentName: 'accounts',
          text: 'Lista de Contas',
          routeName: 'accounts.list',
          selectedCssClass: ''
        }, {
          nested: true,
          parentName: 'accounts',
          text: 'Migração de Contas',
          routeName: 'accounts.migration',
          selectedCssClass: ''
        }]
      }, {
        text: 'Cupons',
        routeName: 'coupons',
        selectedCssClass: '',
        nest: [{
          nested: true,
          parentName: 'coupons',
          text: 'Lista de Cupons',
          routeName: 'coupons.list',
          selectedCssClass: ''
        }]
      }, {
        text: 'Financeiro',
        routeName: 'finance',
        selectedCssClass: ''
      }]);
    });

    it('should set item as selected when item route includes the current route', () => {
      stubRouteServiceMethod('includesRoute', 'accounts');
      controller.init();
      expect(controller.items[0].selectedCssClass).toEqual('app-menu-item-selected');
    });

    it('should not set item as selected when item route is not the current route', () => {
      stubRouteServiceMethod('includesRoute', 'accounts');
      controller.init();
      expect(controller.items[1].selectedCssClass).toEqual('');
    });

    it('should go to the item route on item click', () => {
      controller.init();
      controller.onItemClick(controller.items[1]);
      expect(routeService.go).toHaveBeenCalledWith('coupons');
    });

    it('should not go to the item route on item click when item cancels navigation', () => {
      controller.init();
      controller.onItemClick(controller.items[0]);
      expect(routeService.go).not.toHaveBeenCalled();
    });

    it('should set nested item as selected when nested item route is the current route', () => {
      stubRouteServiceMethod('isCurrentRoute', 'accounts.list');
      controller.init();
      expect(controller.items[0].nest[0].selectedCssClass).toEqual('app-menu-sub-item-selected');
    });

    it('should update selected items on route change success', () => {
      stubRouteServiceMethod('includesRoute', 'accounts');
      controller.init();
      expect(controller.items[1].nest[0].selectedCssClass).toEqual('');
      stubRouteServiceMethod('isCurrentRoute', 'coupons.list');
      $rootScope.$broadcast('$stateChangeSuccess', controller.items);
      expect(controller.items[1].nest[0].selectedCssClass).toEqual('app-menu-sub-item-selected');
    });

    it('should toggle sub items visibility on item click when item has sub items', () => {
      controller.init();
      const item = controller.items[0];
      controller.onItemClick(item);
      expect(item.shouldShowSubItems).toEqual(true);
      controller.onItemClick(item);
      expect(item.shouldShowSubItems).toEqual(false);
    });

    it('should not toggle sub items visibility on item click when item has no sub items', () => {
      controller.init();
      const item = controller.items[2];
      controller.onItemClick(item);
      expect(item.shouldShowSubItems).toEqual(false);
      controller.onItemClick(item);
      expect(item.shouldShowSubItems).toEqual(false);
    });

    it('should stop immediate propagation on sub item click', () => {
      controller.init();
      const subItem = controller.items[0].nest[0];
      controller.onSubItemClick($eventMock, subItem);
      expect($eventMock.stopImmediatePropagation).toHaveBeenCalled();
    });

    it('should go to a sub item route on sub item click', () => {
      controller.init();
      const subItem = controller.items[0].nest[0];
      controller.onSubItemClick($eventMock, subItem);
      expect(routeService.go).toHaveBeenCalledWith('accounts.list');
    });

    it('should hide all sub items on sub item click', () => {
      controller.init();
      const item = controller.items[0];
      const subItem = item.nest[0];
      item.shouldShowSubItems = true;
      controller.onSubItemClick($eventMock, subItem);
      expect(controller.items[0].shouldShowSubItems).toEqual(false);
      expect(controller.items[1].shouldShowSubItems).toEqual(false);
      expect(controller.items[2].shouldShowSubItems).toEqual(false);
    });

  });

}());
