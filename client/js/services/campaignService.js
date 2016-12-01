/**
 * Created by jadoux on 21/11/2016.
 */
(function() {
  "use strict";

  angular
    .module('app')
    .factory('CampaignService', CampaignService);

  CampaignService.$inject = ['$q', 'Campaign'];

  function CampaignService($q, Campaign) {
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
      return $q(function(resolve, reject) {
        Campaign.findById(
            {id : id, filter: {include: {playerJoueurs: "picture"}}}
          )
          .$promise
          .then(function(response) {
            response.playerListObj = [];

            for(var i in response.playerJoueurs) {
              response.playerListObj.push(new BasePlayer(response.playerJoueurs[i]));
            }
            resolve(response);
          }, function(reason) {
            reject(reason);
          });
      });
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
