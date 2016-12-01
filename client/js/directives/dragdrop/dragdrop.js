/**
 * Created by jadoux on 30/11/2016.
 */
(function() {
  'use strict';

  angular
    .module('app')
    .directive('draggable', draggable)
    .directive('droppable', droppable);


  function draggable() {
    return {
      scope: {
        dragstart: '&',
        dragstop: '&'
      },
      link : function(scope, element) {
        // this gives us the native JS object
        element.draggable({
          revert: "invalid",
          appendTo: 'body',
          helper: 'clone',
          zIndex: 999,
          start: function() {
            scope.dragstart();
            scope.$apply();
          },
          stop: function() {
            scope.dragstop();
            scope.$apply();
          }
        });
      }
    }
  }


  function droppable() {
    return {
      scope: {
        drop: '&' // parent
      },
      link: function(scope, element) {
        element.droppable({
          drop: function( event, ui ) {
            scope.drop({arg1: event});
            scope.$apply();
          }
        });
      }
    }
  }
})();
