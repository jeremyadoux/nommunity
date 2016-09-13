(function() {
  'use strict';

  angular
    .module('app')
    .controller('rencontreDetailController', rencontreDetailController);


  rencontreDetailController.$inject=['$stateParams', '$timeout', 'RencontreService'];

  function rencontreDetailController($stateParams, $timeout, RencontreService) {
    var vm = this;

    //VM method
    vm.getPeril = getPeril;
    vm.sendAllInitiative = sendAllInitiative;
    vm.changeModeToPlus = changeModeToPlus;
    vm.changeModeToMoins = changeModeToMoins;
    vm.changePVBy = changePVBy;
    vm.rollAllPowerDice = rollAllPowerDice;
    vm.rollPowerDiceAttack = rollPowerDiceAttack;
    vm.rollPowerDiceDegat = rollPowerDiceDegat;
    vm.rollPowerDiceRAZ = rollPowerDiceRAZ;

    //VM attribute
    vm.rencontreId = $stateParams.rencontreId || 0;
    vm.rencontre = {};

    function initController() {
      loadRencontre();
    }

    function loadRencontre() {
      RencontreService.loadByRelationId(vm.rencontreId).then(function(response) {
        vm.rencontre = response;
        initializeAllPnj();
      });
    }

    function initializeAllPnj() {
      for(var i in vm.rencontre.relation) {
        var relation = vm.rencontre.relation[i];
        setMethodObject(relation);
        setPvMax(relation);
      }
    }

    function sendAllInitiative() {
      for(var i in vm.rencontre.relation) {
        var relation = vm.rencontre.relation[i];
        sendInitiative(relation);
      }
    }

    function sendInitiative(relation) {
      relation.data.initiative = d20.roll("1d20+"+relation.jdrpnj.initiative);
    }

    function setPvMax(relation) {
      relation.data.pv = relation.jdrpnj.pv;
    }

    function setMethodObject(relation) {
      relation.method = {
        pvmodeplus: false,
        pvmodemoins: true
      };
    }

    function getPeril(pv) {
      return Math.floor(pv/2);
    }

    function changeModeToPlus(relation) {
      relation.method.pvmodeplus = true;
      relation.method.pvmodemoins = false;
    }

    function changeModeToMoins(relation) {
      relation.method.pvmodemoins = true;
      relation.method.pvmodeplus = false;
    }

    function changePVBy(nb, relation) {
      if(relation.method.pvmodemoins) {
        changePvFromRelation(nb*-1, relation);
      } else if(relation.method.pvmodeplus) {
        changePvFromRelation(nb, relation);
      }
    }

    function changePvFromRelation(nb, relation) {
      if(typeof relation.currentPvChanged == "undefined") {
        relation.currentPvChanged = 0;
      }
      relation.currentPvChanged += nb;

      if(typeof relation.$pvChangedTimer != "undefined") {
        $timeout.cancel(relation.$pvChangedTimer);
      }
      relation.$pvChangedTimer = $timeout(function(relation) {
        relation.data.pv += relation.currentPvChanged;
        relation.currentPvChanged = 0;
      }, 2000, true, relation);
    }

    function rollPowerDiceRAZ(power) {
      power.$diceExecuted = {
        attack: [],
        degat: []
      };
    }

    function rollAllPowerDice(power) {
      power.$diceExecuted = {
        attack: [],
        degat: []
      };

      rollPowerDiceAttack(power);
      rollPowerDiceDegat(power)
    }

    function rollPowerDiceAttack(power) {
      var result = d20.roll(power.attackdice);
      power.$diceExecuted.attack.push({result: result});
    }

    function rollPowerDiceDegat(power) {
      var result = d20.roll(power.degatdice);
      console.log(result);
      power.$diceExecuted.degat.push({result: result});
    }

    initController();
  }
})();
