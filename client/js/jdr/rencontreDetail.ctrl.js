(function() {
  'use strict';

  angular
    .module('app')
    .controller('rencontreDetailController', rencontreDetailController);


  rencontreDetailController.$inject=['$stateParams', '$timeout', '$anchorScroll', '$uibModal', '$scope', 'RencontreService'];

  function rencontreDetailController($stateParams, $timeout, $anchorScroll, $uibModal, $scope, RencontreService) {
    var vm = this;
    var modalInstance;

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
    vm.sendSkillDice = sendSkillDice;
    vm.addPlayerInitiative = addPlayerInitiative;
    vm.goToCardPnj = goToCardPnj;
    vm.startFight = startFight;
    vm.nextPlayer = nextPlayer;
    vm.validChangeOnPlayerInitiative = validChangeOnPlayerInitiative;
    vm.addPowerEffect = addPowerEffect;
    vm.addEffectModal = addEffectModal;
    vm.closeModal = closeModal;

    //VM attribute
    vm.rencontreId = $stateParams.rencontreId || 0;
    vm.rencontre = {};
    vm.initArray = [];
    vm.playerList = [];
    vm.currentEffectToAdd = {};
    vm.effectList = [];
    vm.fight = false;

    function initController() {
      loadRencontre();
    }

    function loadRencontre() {
      RencontreService.loadByRelationId(vm.rencontreId).then(function(response) {
        vm.rencontre = response;
        initializeAllPnj();
        sendAllInitiative();
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

      prepareInitArray();
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
      if(typeof power.$diceExecuted == "undefined") {
        power.$diceExecuted = {
          attack: [],
          degat: []
        };
      }

      if(typeof power.attackdice != "undefined") {
        var result = d20.roll(power.attackdice, true);
        power.$diceExecuted.attack.push({result: result});
      }
    }

    function rollPowerDiceDegat(power) {
      if(typeof power.$diceExecuted == "undefined") {
        power.$diceExecuted = {
          attack: [],
          degat: []
        };
      }
      if(typeof power.degatdice != "undefined") {
        var result = d20.roll(power.degatdice);
        power.$diceExecuted.degat.push({result: result});
      }
    }

    function sendSkillDice() {

    }

    function prepareInitArray() {
      vm.playerList = [];

      for(var i in vm.rencontre.relation) {
        var relation = vm.rencontre.relation[i];
        vm.playerList.push({initiative: relation.data.initiative, name: relation.jdrpnj.name, relation: relation, isCurrentPlayer:  false, edit: false, effectOwner: [], effectTarget: []});
      }

      sortInitArray();
    }

    function sortInitArray() {
      vm.playerList.sort(function(a, b) {
        if(a.initiative > b.initiative) {
          return -1;
        }
        if (a.initiative < b.initiative){
          return 1;
        }

        return 0;
      });
    }

    function addPlayerInitiative() {
      vm.playerList.push({initiative: 0, name: '', relation: false, isCurrentPlayer:  false, edit: false, effectOwner: [], effectTarget: []});
    }

    function validChangeOnPlayerInitiative(player) {
      player.edit = false;
      sortInitArray();
    }

    function goToCardPnj(relation) {
      $anchorScroll("pnj-card-"+relation.relationId);
      jQuery("#pnj-card-"+relation.relationId).addClass('bgm-orange');
      $timeout(function(relation) {
        jQuery("#pnj-card-"+relation.relationId).removeClass('bgm-orange');
      }, 1000, true, relation);
    }

    function startFight() {
      vm.fight = {
        round: 1,
        currentPlayerIndex: 0
      };

      setReallyCurrentPlayer();
    }

    function nextPlayer() {
      vm.fight.currentPlayerIndex++;


      if(vm.fight.currentPlayerIndex >= vm.playerList.length) {
        nextRound();
      } else {
        setReallyCurrentPlayer();
      }
    }

    function nextRound() {
      vm.fight.round++;
      vm.fight.currentPlayerIndex = 0;

      setReallyCurrentPlayer();
    }

    function setReallyCurrentPlayer() {
      for(var i in vm.playerList) {
        vm.playerList[i].isCurrentPlayer = false;
      }
      vm.playerList[vm.fight.currentPlayerIndex].isCurrentPlayer = true;
    }

    function addPowerEffect(power, relation) {
      vm.currentModalEffectData = {
        power: power
      };

      for(var i in vm.playerList) {
        if(vm.playerList[i].relation == relation) {
          vm.currentModalEffectData.player = vm.playerList[i];
        }
      }

      modalInstance = $uibModal.open({
        templateUrl: 'views/rencontre/modalAddEffect.html',
        controllerAs: 'vmRD',
        bindToController: true,
        scope: $scope
      });
    }

    function addEffectModal() {
      vm.currentModalEffectData.player.effectOwner.push(vm.currentModalEffectData);
      vm.currentModalEffectData.playerTarget.effectTarget.push(vm.currentModalEffectData);
      vm.effectList.push(vm.currentModalEffectData);
      vm.currentModalEffectData = {};
      modalInstance.close();
    }

    function closeModal() {
      modalInstance.close();
    }

    initController();
  }
})();
