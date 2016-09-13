(function() {
  'use strict';

  angular
    .module('app')
    .controller('rencontreDetailController', rencontreDetailController);


  rencontreDetailController.$inject=['$stateParams', 'RencontreService'];

  function rencontreDetailController($stateParams, RencontreService) {
    var vm = this;

    //VM method
    vm.getPeril = getPeril;
    vm.sendAllInitiative = sendAllInitiative;

    //VM attribute
    vm.rencontreId = $stateParams.rencontreId || 0;
    vm.rencontre = {};

    function initController() {
      loadRencontre();
    }

    function loadRencontre() {
      RencontreService.loadByRelationId(vm.rencontreId).then(function(response) {
        vm.rencontre = response;
      });
    }

    function sendAllInitiative() {
      console.log(vm.rencontre);
    }

    function getPeril(pv) {
      return Math.floor(pv/2);
    }


    function roll(dice)
    {
      var dice = dice.replace(/- */,'+ -');
      var dice = dice.replace(/D/,'d');
      var re = / *\+ */;
      var items = dice.split(re);
      var res = new Array();
      var type = new Array();
      for ( var i=0; i<items.length; i++) {
        var match = items[i].match(/^[ \t]*(-)?(\d+)?(?:(d)(\d+))?[ \t]*$/);
        if (match) {
          var sign = match[1]?-1:1;
          var num = parseInt(match[2] || "1");
          var max = parseInt(match[4] || "0");
          if (match[3]) {
            for ( j=1; j<=num; j++) {
              res[res.length] = sign * Math.ceil(max*Math.random());
              type[type.length] = max;
            }
          }
          else {
            res[res.length] = sign * num;
            type[type.length] = 0;
          }
        }
        else return null;
      }
      if (res.length == 0) return null;
      return {"res":res, "type":type};
    }

    initController();
  }
})();
