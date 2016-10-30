/**
 * Created by jadoux on 29/10/2016.
 */
(function() {
  'use strict';

  angular.module('app')
    .directive("lifeManagement", lifeManagementDirective);


  function lifeManagementDirective() {
    return {
      restrict: "E",
      templateUrl: "js/directives/jdr/lifeManagement/templates/life-management.html",
      scope: {pnj: "=pnj"},
      controller: "lifeManagementController",
      controllerAs: "vm",
      bindToController: true
    };
  }

})();
