(function (){
  'use strict';

  function appMenuDirective(){
    return {
      restrict: 'E',
      scope: {},
      controller: 'appMenuController',
      controllerAs: '$ctrl',
      bindToController: true,
      templateUrl: '/base/components/app-menu/app-menu-template.html',
    }
  }

  angular.module('app').directive('nrAppMenu', appMenuDirective);

}());
