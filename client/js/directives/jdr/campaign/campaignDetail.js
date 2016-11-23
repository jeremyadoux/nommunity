/**
 * Created by jadoux on 21/11/2016.
 */
(function() {
  "use strict";

  angular
    .module('app')
    .directive("campaignDetail", campaignDetailDirective);


  function campaignDetailDirective() {
    return {
      restrict: "E",
      templateUrl: "js/directives/jdr/campaign/templates/small-detail.html",
      scope: {
        campaign: "=campaign"
      },
      controller: "detailCampaignDirectiveController",
      controllerAs: "vm",
      bindToController: true,
      replace: false
    };
  }
})();
