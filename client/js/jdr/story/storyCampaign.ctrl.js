(function() {
  'use strict';

  angular
    .module('app')
    .controller('StoryCampaign', StoryCampaign);

  StoryCampaign.$inject = ['$uibModal', 'growlService', '$scope', '$stateParams', 'CampaignService'];

  function StoryCampaign($uibModal, growlService, $scope, $stateParams, CampaignService) {
    var vm = this;

    //@Method
    vm.addStory = addStory;

    //@Attributes
    vm.vmCD = $scope.$parent.vmCD;

    function addStory() {
      var chapter = 1;
      if(Array.isArray(vm.vmCD.campaign.story)) {
        chapter = (vm.vmCD.campaign.story.length) + 1;
      } else {
        vm.vmCD.campaign.story = [];
      }

      CampaignService.addStory(vm.vmCD.campaign, {name: 'no', chapter: chapter}).then(function(story) {
        vm.vmCD.campaign.story.push(story);
      })
    }

    function init() {
      console.log(vm.vmCD);
    }

    init();
  }
})();

/*function popinStorySave() {
 modalInstance = $uibModal.open({
 templateUrl: 'views/story/modalAddStory.html',
 controllerAs: 'vmSC',
 bindToController: true,
 scope: $scope
 });
 }

 function closeModal() {
 modalInstance.close();
 }*/
