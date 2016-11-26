/**
 * Created by jadoux on 25/11/2016.
 */
(function() {
  'use strict';

  angular
    .module('app')
    .controller('CampaignDetail', CampaignDetail);

  CampaignDetail.$inject = ['$stateParams', '$state', 'CampaignService', 'growlService'];

  function CampaignDetail($stateParams, $state, CampaignService, growlService) {
    var vm = this;

    //@Method

    //@Var
    vm.campaign = false;

    function init() {
      CampaignService.loadById($stateParams.campaignId).then(function(campaign) {
        vm.campaign = campaign;
      }, function(reject) {
        $state.go('home');
        growlService.growl("Désolé, une erreure s'est produite durant le chargement de la campagne.", "danger");
      });
    }


    init();
  }
})();
