(function() {
  'use strict';

  angular
    .module('app')
    .controller('RencontreCreate', RencontreCreate);

  RencontreCreate.$inject = ['RencontreService', '$uibModal', '$scope', 'growlService'];

  function RencontreCreate(RencontreService, $uibModal, $scope, growlService) {
    var vm = this;
    var modalInstance;

    //Method VM
    vm.openModalAddPnj = openModalAddPnj;
    vm.closeModal = closeModal;
    vm.addPnj = addPnj;
    vm.removePnj = removePnj;
    vm.getPeril = getPeril;
    vm.saveAction = saveAction;

    //Init variable vM
    vm.pnjList = [];
    vm.formRencontre = {
      name: '',
      pnjList: []
    };


    //Create Modal
    function openModalAddPnj(size) {
      modalInstance = $uibModal.open({
        templateUrl: 'views/rencontre/modalAddPnj.html',
        controllerAs: 'vmRC',
        bindToController: true,
        scope: $scope
      });
    }

    function closeModal() {
      modalInstance.close();
    }

    function addPnj(pnj) {
      var pnjCopy = {};
      angular.copy(pnj, pnjCopy);
      vm.formRencontre.pnjList.push(pnjCopy);
    }

    function removePnj(pnj) {

    }

    function getPeril(pv) {
      return Math.floor(pv/2);
    }

    function saveAction(form) {
      if(form.$valid) {
        RencontreService.create(vm.formRencontre)
          .then(function (rencontre) {
            growlService.growl("Your rencontre " + rencontre.name + " have been created.", "success");
          });
      } else {
        growlService.growl("Please check the form to create news, you have any errors.", "danger");
      }
    }
  }
})();

