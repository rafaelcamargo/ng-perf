(function (){
  'use strict';

  function rowItemController(){
    const $ctrl = this;

    $ctrl.init = () => {
      setRowItemSize($ctrl.size);
    }

    function setRowItemSize(size){
      $ctrl.sizeCssClass = size ? `row-item-size-${size}` : '';
    };

    $ctrl.init();
  }

  angular.module('app').controller('rowItemController', rowItemController);

}());
