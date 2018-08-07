(function (){
  'use strict';

  function topbarDirective(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/base/components/topbar/topbar-template.html'
    }
  }

  angular.module('app').directive('nrTopbar', topbarDirective);

}());
