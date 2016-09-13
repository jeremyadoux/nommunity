(function() {
  'use strict';

  angular
    .module('app')
    .factory('RencontreService', RencontreService);

  RencontreService.$inject = ['$q', 'Rencontre', 'RencontrePnjRelation'];

  function RencontreService($q, Rencontre, RencontrePnjRelation) {
    var method = {
      load: load,
      loadByRelationId: loadByRelationId,
      create: create
    };

    return method;

    function load(filter) {
      filter.include = "jdrpnjs";

      return Rencontre.find({filter: filter})
        .$promise;
    }

    function loadByRelationId(rencontreId) {
      return $q(function(resolve, reject) {
        var filter = {};

        filter.include = ["rencontre", "jdrpnj"];
        filter.where = {rencontreId: rencontreId};
        RencontrePnjRelation.find({filter: filter})
          .$promise
          .then(function(response) {
            var prepareDataRencontre = response[0].rencontre;
            prepareDataRencontre.relation = [];
            
            for(var i in response) {
              if(typeof response[i].id !== 'undefined') {
                prepareDataRencontre.relation.push({
                  relationId: response[i].id,
                  data: response[i].data,
                  jdrpnj: response[i].jdrpnj
                })
              }
            }

            resolve(prepareDataRencontre);
          });
      });
    }

    function create(rencontre) {
      return $q(function(resolve, reject) {
        Rencontre.create({
          name: rencontre.name
        }).$promise
          .then(function(newRencontre) {
            if(newRencontre.id) {
              //PrepareDataToSave
              var dataPnjRencontre = [];
              for (var i in rencontre.pnjList) {
                dataPnjRencontre.push({
                  rencontreId: newRencontre.id,
                  jdrpnjId: rencontre.pnjList[i].id
                });
              }

              RencontrePnjRelation.createMany(dataPnjRencontre).$promise
                .then(function (response) {
                  resolve(rencontre);
                })
            } else {
              reject();
            }
          });
      });
    }
  }
})();
