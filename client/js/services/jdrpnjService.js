(function() {
  'use strict';

  angular
    .module('app')
    .factory('JDRPNJService', JDRPNJService);

  JDRPNJService.$inject = ['Jdrpnj'];

  function JDRPNJService(Jdrpnj) {
    //Define the method's list
    var method = {
      create: create,
      load: load,
      count: count
    };

    return method;

    function create(data) {
      var jdrPNJProtected = {
        name: data.name,
        level: data.level || 0,
        initiative: data.initiative,
        perception: data.perception,
        pv: data.pv,
        ca: data.ca,
        vig: data.vig,
        reflex: data.reflex,
        volonte: data.volonte,
        move: data.move,
        experience: data.experience,
        str: data.str,
        dex: data.dex,
        sag: data.sag,
        con: data.con,
        int: data.int,
        cha: data.cha,
        immunity: data.immunity || '',
        resistance: data.resistance || '',
        vulnerability: data.vulnerability || '',
        equipement: data.equipement || '',
        alignement: data.alignement || '',
        language: data.language || '',
        informations: data.informations || '',
        power: data.power || [],
        skill: data.skill || []
      };

      return Jdrpnj.create(jdrPNJProtected)
        .$promise;
    }

    function load(filter) {
      return Jdrpnj.find({filter: filter})
        .$promise;
    }

    function count(filter) {
      return Jdrpnj.count({filter: filter})
        .$promise;
    }
  }
})();
