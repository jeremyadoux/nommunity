(function () {
  'use strict';

  angular.module('app')
    .controller("cadrePnjController", cadrePnjController);

  cadrePnjController.$inject = ['$timeout'];

  function cadrePnjController($timeout) {
    var vm = this;

    vm.pvmodeplus = false;
    vm.pvmodemoins = true;
    vm.currentPvChanged = 0;
    vm.$pvChangedTimer = null;

    vm.changeModeToPlus = changeModeToPlus;
    vm.changeModeToMoins = changeModeToMoins;
    vm.changePVBy = changePVBy;

    function changeModeToPlus() {
      vm.pvmodeplus = true;
      vm.pvmodemoins = false;
    }

    function changeModeToMoins() {
      vm.pvmodemoins = true;
      vm.pvmodeplus = false;
    }

    function changePVBy(nb) {
      if(vm.pvmodemoins) {
        changePvFromRelation(nb*-1);
      } else if(vm.pvmodeplus) {
        changePvFromRelation(nb);
      }
    }

    function changePvFromRelation(nb) {
      vm.currentPvChanged += nb;

      if(typeof vm.$pvChangedTimer != "undefined") {
        $timeout.cancel(vm.$pvChangedTimer);
      }
      vm.$pvChangedTimer = $timeout(function() {
        vm.pnj.changePV(vm.currentPvChanged);
        vm.currentPvChanged = 0;
      }, 2000, true);
    }
  }

})();

