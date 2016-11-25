/**
 * Created by jadoux on 21/11/2016.
 */
(function() {
  'use strict';

  angular
    .module('app')
    .controller('CampaignAction', CampaignAction);

  CampaignAction.$inject = ['CampaignService', '$uibModal', '$scope', 'growlService'];

  function CampaignAction(CampaignService, $uibModal, $scope, growlService) {
    var vm = this;

    //@Method
    vm.openCreateModal = openCreateModal;
    vm.closeModal = closeModal;
    vm.create = create;
    vm.deleteOpen = deleteOpen;

    //@Init variable
    vm.form = {
      name: ''
    };
    var modalInstance;
    var reloadFunction;
    vm.editedCampaign = false;

    function openCreateModal(campaign, callbackReload) {
      if(typeof callbackReload === "function") {
        reloadFunction = callbackReload;
      } else {
        reloadFunction = null;
      }

      if(campaign != null) {
        vm.editedCampaign = campaign;
        angular.copy(vm.editedCampaign, vm.form);
      } else {
        angular.copy({name: ''}, vm.form);
        vm.editedCampaign = false;
      }

      modalInstance = $uibModal.open({
        templateUrl: 'views/campaign/create.html',
        controllerAs: 'vmCC',
        bindToController: true,
        scope: $scope
      });
    }

    function closeModal() {
      modalInstance.close();
    }

    function create(form) {

      if(form.$valid) {
        if(vm.editedCampaign) {
          angular.merge(vm.editedCampaign, vm.form);
          vm.editedCampaign.$save().then(function(campaign) {
            growlService.growl("Votre campagne " + campaign.name + " a été mise à jour.", "success");
            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }
            vm.form = {
              name: ''
            };
            if(typeof reloadFunction === "function") {
              reloadFunction();
            }
            modalInstance.close();
          });
        } else {
          CampaignService.create(vm.form)
            .then(function (campaign) {
              growlService.growl("Votre campagne " + campaign.name + " a été créée.", "success");

              if (form) {
                form.$setPristine();
                form.$setUntouched();
              }
              angular.copy({name: ''}, vm.form);
              if(typeof reloadFunction === "function") {
                reloadFunction();
              }
              modalInstance.close();
            });
        }
      } else {
        growlService.growl("Please check the form, you have any errors.", "danger");
      }
    }

    function deleteOpen(campaign, callbackDelete) {
      swal({
        title: "Êtes-vous sûrs ?",
        text: "Vous souhaitez effacer la campagne "+ campaign.name +", toutes les données seront perdues !",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Oui, efface la!",
        cancelButtonText: "Non, annule !",
        closeOnConfirm: false,
        closeOnCancel: false
      }, function(isConfirm){
        if (isConfirm) {
          var name = campaign.name;
          campaign.$delete().then(function() {
            swal("Effacer!", "La campagne " + name + " a été effacée.", "success");
            if(typeof callbackDelete  === "function") {
              callbackDelete();
            }
          });
        } else {
          swal("Annuler", "La campagne "+ campaign.name +" n'a pas été effacée.", "error");
        }
      });
    }
  }
})();
