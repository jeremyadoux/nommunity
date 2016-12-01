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
    return function(scope, element) {
      // this gives us the native JS object
      var el = element[0];

      el.draggable = true;

      el.addEventListener(
        'dragstart',
        function(e) {
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('Text', this.id);
          this.classList.add('drag');
          return false;
        },
        false
      );

      el.addEventListener(
        'dragend',
        function(e) {
          this.classList.remove('drag');
          return false;
        },
        false
      );
    }
  }


  function droppable() {
    return {
      scope: {
        drop: '&' // parent
      },
      link: function(scope, element) {
        // again we need the native object
        var el = element[0];

        el.addEventListener(
          'dragover',
          function(e) {
            e.dataTransfer.dropEffect = 'move';
            // allows us to drop
            if (e.preventDefault) e.preventDefault();
            this.classList.add('over');
            return false;
          },
          false
        );

        el.addEventListener(
          'dragenter',
          function(e) {
            this.classList.add('over');
            return false;
          },
          false
        );

        el.addEventListener(
          'dragleave',
          function(e) {
            this.classList.remove('over');
            return false;
          },
          false
        );

        el.addEventListener(
          'drop',
          function(e) {
            if(e.preventDefault) e.preventDefault();
            // Stops some browsers from redirecting.
            if (e.stopPropagation) e.stopPropagation();

            this.classList.remove('over');

            // call the drop passed drop function
            scope.drop({arg1: e});

            return false;
          },
          false
        );
      }
    }
  }
})();
