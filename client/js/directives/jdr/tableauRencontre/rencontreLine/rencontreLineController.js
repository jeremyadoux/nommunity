/**
 * Created by jadoux on 29/10/2016.
 */
(function() {
  'use strict';

  angular.module('app')
    .controller('rencontreLineDirectiveController', rencontreLineDirectiveController);


  rencontreLineDirectiveController.$inject = [];

  function rencontreLineDirectiveController() {
    var vm = this;

    //@Attributes
    vm.edit = false;
    vm.form = {
      'initiativeResult': 0,
      'initiative': 0
    };

    //@Method
    vm.validChangeOnPlayerInitiative = validChangeOnPlayerInitiative;


    function validChangeOnPlayerInitiative() {
      vm.edit = false;

      vm.playable.initiative = vm.form.initiative;
      vm.playable.initiativeResult = vm.form.initiativeResult;
    }
  }
})();
