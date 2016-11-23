/**
 * Created by jadoux on 21/11/2016.
 */
(function() {
  'use strict';

  angular
    .module('app')
    .controller('CampaignCreate', CampaignCreate);

  CampaignCreate.$inject = ['CampaignService', '$uibModal', '$scope', 'growlService'];

  function CampaignCreate(CampaignService, $uibModal, $scope, growlService) {
    var vm = this;

    //@Method
    vm.openModal = openModal;
    vm.closeModal = closeModal;
    vm.create = create;

    //@Init variable
    vm.form = {
      name: ''
    };
    var modalInstance;

    function openModal() {
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
        CampaignService.create(vm.form)
          .then(function (campaign) {
            growlService.growl("Your campaign " + campaign.name + " have been created.", "success");

            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }
            angular.copy({name: ''}, vm.form);
            modalInstance.close();
          });
      } else {
        growlService.growl("Please check the form to create campaign, you have any errors.", "danger");
      }
    }
  }
})();
