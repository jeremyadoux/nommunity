/**
 * Created by jadoux on 26/11/2016.
 */
(function() {
  'use strict';

  angular
    .module('app')
    .controller('RencontreGrid', RencontreGrid);

  RencontreGrid.$inject = ['$scope', '$stateParams', 'growlService', '$uibModal', '$timeout'];

  function RencontreGrid($scope, $stateParams, growlService, $uibModal, $timeout) {
    var vm = this;

    //@Methods
    vm.closeModalPlayerAdd = closeModalPlayerAdd;
    vm.nextStep = nextStep;

    //@Attributes
    vm.currentStep = 0;
    vm.vmCD = $scope.$parent.vmCD;
    vm.canvas = null;
    vm.gridSize = 50;
    vm.gridCol = 20;
    vm.gridLine = 20;
    vm.pjList = [];

    var modalInstancePlayerAdd;

    function nextStep() {
      vm.currentStep++;

      switch (vm.currentStep) {
        case 1:
          openModalPlayerAdd();
        break;
        case 2:
          modalInstancePlayerAdd.close();
        break;
      }
    }


    function openModalPlayerAdd() {
      modalInstancePlayerAdd = $uibModal.open({
        templateUrl: 'views/campaign/player/modalSelect.html',
        controllerAs: 'vmRG',
        bindToController: true,
        scope: $scope
      });
    }

    function closeModalPlayerAdd() {
      vm.currentStep = 0;
      vm.pjList = [];
      modalInstancePlayerAdd.close();
    }

    function init() {
      initializeCanvas();
      generateGrid();
    }

    function initializeCanvas() {
      vm.canvas = new fabric.Canvas('canvas', { selection: false });
      vm.canvas.setHeight((vm.gridLine + 1) * vm.gridSize);
      vm.canvas.setWidth((vm.gridCol + 1) * vm.gridSize);
    }

    function generateGrid() {
      var i;
      var fontSize = 15;
      for (i = 0; i <= vm.gridCol; i++) {
        vm.canvas.add(new fabric.Line([ i * vm.gridSize, 0, i * vm.gridSize, vm.gridLine * vm.gridSize], { stroke: '#ccc', selectable: false }));
        if(i < vm.gridCol) {
          vm.canvas.add(new fabric.Text(CharOfId(i), {fontWeight: 'normal', fontSize: fontSize, left: (i * vm.gridSize) + (vm.gridSize / 2 - fontSize /2 ), top: 0, selectable: false}));
        }
      }

      for (i = 0; i <= vm.gridLine; i++) {
        vm.canvas.add(new fabric.Line([ 0, i * vm.gridSize, vm.gridCol * vm.gridSize, i * vm.gridSize], { stroke: '#ccc', selectable: false }));
        if(i < vm.gridLine) {
          vm.canvas.add(new fabric.Text((i + 1).toString(), {fontWeight: 'normal', fontSize: fontSize, left: 0, top: (i * vm.gridSize) + (vm.gridSize / 2 - fontSize /2 ), selectable: false}));
        }
      }
    }

    function CharOfId(i) {
      return (i >= 26 ? CharOfId((i / 26 >> 0) - 1) : '') +
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i % 26 >> 0];
    }

    init();
  }
})();
