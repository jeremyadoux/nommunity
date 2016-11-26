(function() {
  'use strict';

  angular
    .module('app')
    .controller('rencontreDetailController', rencontreDetailController);

  rencontreDetailController.$inject=['$stateParams', 'RencontreService', 'PjService'];

  function rencontreDetailController($stateParams, RencontreService, PjService) {
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
      PjService.load({})
        .then(function(pjList) {
          console.log(pjList);
          for(var i in pjList) {
            if(i != "$promise" && i != "$resolved")
            vm.playerList.push(new BasePlayer(pjList[i], sortInitArray));
          }
        });
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

      PjService.resetAll().then(function(response) {
        if(!vm.playerList[vm.fight.currentPlayerIndex].isPnj()) {
          PjService.currentPlayer(vm.playerList[vm.fight.currentPlayerIndex].id);
        }
        if(typeof vm.playerList[vm.fight.currentPlayerIndex + 1] != "undefined") {
          if(!vm.playerList[vm.fight.currentPlayerIndex + 1].isPnj()) {
            PjService.nextPlayer(vm.playerList[vm.fight.currentPlayerIndex + 1].id);
          }
        } else {
          if(!vm.playerList[0].isPnj()) {
            PjService.nextPlayer(vm.playerList[0].id);
          }
        }
      });
    }

    initController();
  }
})();
