(function() {
  'use strict';

  angular.module('app')
    .factory('PjService', PjService);

  PjService.$inject = ['Jdrpj'];

  function PjService(Jdrpj) {
    //Define the method's list
    var method = {
      load: load,
      currentPlayer: currentPlayer,
      resetAll: resetAll,
      nextPlayer: nextPlayer
    };

    return method;

    function load(filter) {
      return Jdrpj.find({filter: filter})
        .$promise;
    }

    function currentPlayer(id) {
      return Jdrpj.currentPlayer({id: id})
        .$promise;
    }

    function nextPlayer(id) {
      return Jdrpj.nextPlayer({id: id})
        .$promise;
    }

    function resetAll() {
      return Jdrpj.resetAll()
        .$promise;
    }
  }
})();
