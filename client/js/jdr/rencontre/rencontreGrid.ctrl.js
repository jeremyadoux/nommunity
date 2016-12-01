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
    vm.closeModal = closeModal;
    vm.nextStep = nextStep;
    vm.selectObjToDragIt = selectObjToDragIt;
    vm.handleDrop = handleDrop;

    //@Attributes
    vm.currentStep = 0;
    vm.vmCD = $scope.$parent.vmCD;
    vm.canvas = null;
    vm.gridSize = 50;
    vm.gridCol = 20;
    vm.gridLine = 20;
    vm.pjList = [];
    vm.objInDraggability = false;
    vm.openToolbarAddObj = false;

    var modalInstance;

    function handleDrop(e) {
      console.log(e);
    }

    function nextStep(cpt = 1) {
      //cpt = typeof cpt !== 'undefined' ? cpt : 1;
      vm.currentStep += cpt;

      switch (vm.currentStep) {
        case 1:
          //Choice player participate to figth
          openModalPlayerAdd();
          break;
        case 2:
          //Prologue modal
          modalInstance.close();
          openModalPrologue();
          break;
        case 3:
          //Surprise round
          modalInstance.close();
          break;
        case 4:
          //Normal init
          modalInstance.close();
          break;
      }
    }

    function openModalPrologue() {
      modalInstance = $uibModal.open({
        templateUrl: 'views/campaign/rencontre/modalPrologue.html',
        controllerAs: 'vmRG',
        bindToController: true,
        scope: $scope,
        backdrop: false,
        keyboard: false
      });
    }

    function openModalPlayerAdd() {
      modalInstance = $uibModal.open({
        templateUrl: 'views/campaign/rencontre/modalSelectPlayer.html',
        controllerAs: 'vmRG',
        bindToController: true,
        scope: $scope,
        backdrop: false,
        keyboard: false
      });
    }

    function closeModal() {
      vm.currentStep = 0;
      vm.pjList = [];
      modalInstance.close();
    }

    function selectObjToDragIt(obj) {
      vm.objInDraggability = obj;
    }

    /*function addPjOnGrid() {
      for(var i in vm.pjList) {
        var pjObjFabric = new BaseObjectPlayableGrid(vm.pjList[i]);
        pjObjFabric.
        canvas.add()
      }
    }*/

    function init() {
      initializeCanvas();
      generateGrid();
    }

    function initializeCanvas() {
      vm.canvas = new fabric.Canvas('canvas', { selection: false });
      vm.canvas.setHeight((vm.gridLine + 1) * vm.gridSize);
      vm.canvas.setWidth((vm.gridCol + 1) * vm.gridSize);

      vm.canvas.on('mouse:up', function (e) {
        var pointer = vm.canvas.getPointer(e.e);
        var posx = pointer.x;
        var posy = pointer.y;

        if(vm.objInDraggability) {
          var objFabric = new BaseObjectPlayableGrid(vm.objInDraggability);
          objFabric.fabricObj.set({
            left: Math.floor(posx / vm.gridSize) * vm.gridSize,
            top: Math.floor(posy / vm.gridSize) * vm.gridSize
          });
          vm.canvas.add(objFabric.fabricObj);
        }
      });
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
