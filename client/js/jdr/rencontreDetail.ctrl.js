(function() {
  'use strict';

  angular
    .module('app')
    .controller('rencontreDetailController', rencontreDetailController);


  rencontreDetailController.$inject=['$stateParams', '$timeout','$interval', '$anchorScroll', '$uibModal', '$scope', 'RencontreService', 'growlService'];

  function rencontreDetailController($stateParams, $timeout, $interval, $anchorScroll, $uibModal, $scope, RencontreService, growlService) {
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
    vm.rollSkillDice = rollSkillDice;
    vm.transformTimeToHourMinutesSeconde = transformTimeToHourMinutesSeconde;
    vm.executeDiceRoll = executeDiceRoll;
    vm.razDiceRoll = razDiceRoll;

    //VM attribute
    vm.rencontreId = $stateParams.rencontreId || 0;
    vm.rencontre = {};
    vm.initArray = [];
    vm.playerList = [];
    vm.currentEffectToAdd = {};
    vm.fight = false;
    vm.secondePerTurn = 60;
    vm.stopAlertTimer = false;

    function initController() {
      loadRencontre();
    }

    function loadRencontre() {
      RencontreService.loadByRelationId(vm.rencontreId).then(function(response) {
        vm.rencontre = response;
        initializeAllPnj();
        sendAllInitiative();
        initializeAllPj();
      });
    }

    function initializeAllPj() {
      vm.playerList.push({initiative: 0, name: 'Elise', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'MyMy', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Anton', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Antony', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Manon', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Laure', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Victoria', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Fabrice', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Jérémy', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
      vm.playerList.push({initiative: 0, name: 'Luz', relation: false, isCurrentPlayer:  false, edit: true, effectOwner: [], effectTarget: []});
    }

    function initializeAllPnj() {
      for(var i in vm.rencontre.relation) {
        var relation = vm.rencontre.relation[i];
        relation.data.dead = false;
        relation.data.diceSkillTest = "1d6",
        relation.data.rolledDice = [];
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

        if(relation.data.pv <= 0) {
          relation.data.dead = true;
          growlService.growl('Le monstre est mort.', "danger");
          goToCardPnj(relation)
        } else {
          relation.data.dead = false;
        }
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

      if(typeof power.$diceExecuted.attack == "undefined") {
        power.$diceExecuted.attack = [];
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

      if(typeof power.$diceExecuted.degat == "undefined") {
        power.$diceExecuted.degat = [];
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
        relation.jdrpnj.name += " " + (parseInt(i)+1);
        vm.playerList.push({initiative: relation.data.initiative, name: relation.jdrpnj.name, relation: relation, isCurrentPlayer:  false, edit: false, effectOwner: [], effectTarget: []});
      }

      sortInitArray();
    }

    function sortInitArray() {
      vm.playerList.sort(function(a, b) {
        if(parseInt(a.initiative) > parseInt(b.initiative)) {
          return -1;
        }
        if (parseInt(a.initiative) < parseInt(b.initiative)){
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
        currentPlayerIndex: 0,
        totalTime: 0,
        currentTimer: vm.secondePerTurn
      };

      $interval(function() {
        vm.fight.totalTime++;
        if(vm.fight.currentTimer > 0) {
          vm.fight.currentTimer--;
        } else {
          if(!vm.stopAlertTimer) {
            growlService.growl("Le timer est terminé.", "danger");
          }
        }
      }, 1000);

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
      vm.stopAlertTimer = false;
      vm.fight.currentTimer = vm.secondePerTurn;
      for(var i in vm.playerList) {
        vm.playerList[i].isCurrentPlayer = false;
      }
      vm.playerList[vm.fight.currentPlayerIndex].isCurrentPlayer = true;
      for(var j in vm.playerList[vm.fight.currentPlayerIndex].effectOwner) {
        vm.playerList[vm.fight.currentPlayerIndex].effectOwner[j].$nextRound();
      }

      if(vm.playerList[vm.fight.currentPlayerIndex].relation.data.dead) {
        nextPlayer();
      }
    }

    function addPowerEffect(power, relation) {
      vm.currentModalEffectData = {
        description: power.description
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
      vm.currentModalEffectData.$sauvegardeDice = function() {
        var result = d20.roll("1d20");
        if(result >= 10) {
          this.stopped = true;
        }
        this.savedDice = result;
      };
      vm.currentModalEffectData.$remove = function() {
        for(var i in this.playerTarget.effectTarget) {
          if(this.playerTarget.effectTarget[i] == this) {
            this.playerTarget.effectTarget.splice(i, 1);
          }
        }

        for(var j in this.player.effectOwner) {
          if(this.player.effectOwner[j] == this) {
            this.player.effectOwner.splice(j, 1);
          }
        }
      };
      vm.currentModalEffectData.$nextRound = function() {
        if(!this.roundInfinite) {
          this.round--;
        }

        if(this.round < 0) {
          this.stopped = true;
        }
      };

      if(typeof vm.currentModalEffectData.round != 'undefined' && vm.currentModalEffectData.round > 0) {
        vm.currentModalEffectData.roundInfinite = false;
      } else {
        vm.currentModalEffectData.roundInfinite = true;
      }
      vm.currentModalEffectData.stopped = false;
      vm.currentModalEffectData.player.effectOwner.push(vm.currentModalEffectData);
      vm.currentModalEffectData.playerTarget.effectTarget.push(vm.currentModalEffectData);
      vm.currentModalEffectData = {};
      modalInstance.close();
    }

    function closeModal() {
      modalInstance.close();
    }

    function rollSkillDice(relation) {

    }

    function transformTimeToHourMinutesSeconde(nbSecond) {
      if(typeof nbSecond != "undefined") {
        var date = new Date(null);
        date.setSeconds(nbSecond); // specify value for SECONDS here
        return date.toISOString().substr(11, 8);
      }
    }

    function executeDiceRoll(relation) {
      var result = d20.roll(relation.data.diceSkillTest, true);
      relation.data.rolledDice.push({result: result});

    }

    function razDiceRoll(relation) {
      relation.data.rolledDice = [];
    }

    initController();
  }
})();
