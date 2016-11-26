/**
 * Created by jadoux on 21/11/2016.
 */
(function() {
  "use strict";

  angular
    .module('app')
    .factory('CampaignService', CampaignService);

  CampaignService.$inject = ['Campaign'];

  function CampaignService(Campaign) {
    //Define the method's list
    var method = {
      create: create,
      load: load,
      loadById: loadById,
      count: count
    };

    return method;

    function create(data) {
      var CampaignProtected = {
        name: data.name
      };

      return Campaign.create(CampaignProtected)
        .$promise;
    }

    function loadById(id) {
      return Campaign.findById(
        {id : id, filter: {include: "playerJoueurs"}}
      ).$promise;
    }

    function load(filter) {
      return Campaign.find({filter: filter})
        .$promise;
    }

    function count(filter) {
      return Campaign.count({filter: filter})
        .$promise;
    }
  }
})();
