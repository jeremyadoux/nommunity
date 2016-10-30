/**
 * Created by jadoux on 29/10/2016.
 */
(function() {
  "use strict";

  angular.module('app')
    .directive("rencontreLine", rencontreLineDirective);


  function rencontreLineDirective() {
    return {
      restrict: "E",
      templateUrl: "js/directives/jdr/tableauRencontre/rencontreLine/templates/rencontre-line.html",
      scope: {
        playable: "=playable"
      },
      controller: "rencontreLineDirectiveController",
      controllerAs: "vm",
      bindToController: true,
      replace: false
    };
  }
})();
