/**
 * Created by jadoux on 29/10/2016.
 */
(function () {
  'use strict';

  //Usage <cadre-pnj pnj="pnj"></cadre-pnj>
  angular.module('app')
    .directive('cadrePnj', cadrePnjDirective);

  function cadrePnjDirective() {
    return {
      restrict: "E",
      templateUrl: "js/directives/jdr/cadrePnj/templates/cadre-pnj.html",
      scope: {pnj: "=pnj"}
    };
  }
})();
