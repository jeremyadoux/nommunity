(function() {
  'use strict';

  angular
    .module('app')
    .controller('RencontreCtrl', RencontreCtrl);

  RencontreCtrl.$inject = ['RencontreService'];

  function RencontreCtrl(RencontreService) {
    var vm = this;

    //Method VM
    vm.calculLevelRencontre = calculLevelRencontre;
    vm.calculNbPnjRencontre = calculNbPnjRencontre;

    //Variable VM
    vm.rencontreList = [];

    function initController() {
      load();
    }

    function load() {
      RencontreService.load({})
        .then(function(rencontres) {
          vm.rencontreList = rencontres;
        });
    }

    function calculLevelRencontre(rencontre) {
      var level = 0;
      for(var i in rencontre.jdrpnjs) {
        level += rencontre.jdrpnjs[i].level;
      }
      return level;
    }

    function calculNbPnjRencontre(rencontre) {
      return rencontre.jdrpnjs.length;
    }

    initController();
  }
})();
