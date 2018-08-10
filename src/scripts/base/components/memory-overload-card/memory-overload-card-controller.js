(function (){
  'use strict';

  function memoryOverloadCardController(){
    const $ctrl = this;

    $ctrl.init = () => {
      setForm(buildForm());
    };

    function buildForm(){
      const rows = buildFormRows(250);
      return { rows };
    }

    function buildFormRows(amountOfRowsToBuild){
      const rows = [];
      for (var i = 0; i < amountOfRowsToBuild; i++) {
        rows.push(buildRowItems(4));
      }
      return rows;
    }

    function buildRowItems(amountOfRowItemsToBuild){
      const items = [];
      for (var i = 0; i < amountOfRowItemsToBuild; i++) {
        items.push(buildRowItem());
      }
      return items;
    }

    function buildRowItem(){
      return {
        label: buildRandomRowItemLabel(),
        value: buildRandomRowItemValue()
      };
    }

    function buildRandomRowItemLabel(){
      return Math.random().toString(36).substring(2,16);
    }

    function buildRandomRowItemValue(){
      return new Date().getTime();
    }

    function setForm(form){
      $ctrl.form = form;
    }

    $ctrl.init();
  }

  angular.module('app').controller('memoryOverloadCardController', [
    memoryOverloadCardController
  ]);

}());
