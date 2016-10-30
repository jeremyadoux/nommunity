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
    vm.sendAllInitiative = sendAllInitiative;
    vm.addPlayerInitiative = addPlayerInitiative;
    vm.startFight = startFight;
    vm.nextPlayer = nextPlayer;
    vm.sortInitArray = sortInitArray;

    //VM attribute
    vm.rencontreId = $stateParams.rencontreId || 0;
    vm.rencontre = {};
    vm.playerList = [];
    vm.fight = false;

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

    function initializeAllPnj() {
      for(var i in vm.rencontre.pnj) {
        vm.playerList.push(vm.rencontre.pnj[i]);
      }
    }

    function initializeAllPj() {
      vm.playerList.push(new BasePlayer("Laure", sortInitArray));
      vm.playerList.push(new BasePlayer("Elise", sortInitArray));
      vm.playerList.push(new BasePlayer("Anton", sortInitArray));
      vm.playerList.push(new BasePlayer("Mymy", sortInitArray));
    }

    function sendAllInitiative() {
      for(var i in vm.rencontre.pnj) {
        vm.rencontre.pnj[i].sendInitiative();
        vm.rencontre.pnj[i].name = vm.rencontre.pnj[i].realName + " " + (parseInt(i)+1);
      }

      vm.sortInitArray();
    }

    function sortInitArray() {
      vm.playerList.sort(function(a, b) {
        if(parseInt(a.initiativeResult) > parseInt(b.initiativeResult)) {
          return -1;
        }
        if (parseInt(a.initiativeResult) < parseInt(b.initiativeResult)){
          return 1;
        }
        if(parseInt(a.initiativeResult) == parseInt(b.initiativeResult)) {
          if(parseInt(a.initiative) > parseInt(b.initiative)) {
            return -1;
          }
          if (parseInt(a.initiative) < parseInt(b.initiative)){
            return 1;
          }

          if(parseInt(a.initiative) == parseInt(b.initiative)) {
            if(parseInt(a.overInitiative) > parseInt(b.overInitiative)) {
              return -1;
            }
            if (parseInt(a.overInitiative) < parseInt(b.overInitiative)){
              return 1;
            }
          }
        }

        return 0;
      });
    }

    function addPlayerInitiative() {
      vm.playerList.push(new BasePlayer("Name", sortInitArray));
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

    initController();
  }
})();
