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
    vm.dragStart = dragStart;
    vm.changeTabs = changeTabs;
    vm.openModalAddPnj = openModalAddPnj;
    vm.closeModalAddPnj = closeModalAddPnj;
    vm.addPnjToRencontre = addPnjToRencontre;

    //@Attributes
    vm.currentStep = 0;
    vm.vmCD = $scope.$parent.vmCD;
    vm.canvas = null;
    vm.gridSize = 50;
    vm.gridCol = 20;
    vm.gridLine = 20;
    vm.pjList = [];
    vm.pnjList = [];
    vm.objList = [
      new ObjetWallGrid()
    ];
    vm.objInDraggability = false;
    vm.openToolbarAddObj = false;
    vm.currentTabs = 'pj';

    var modalInstance;

    function dragStart(obj) {
      vm.objInDraggability = obj;
    }

    function handleDrop(e) {
      if(vm.objInDraggability) {
        var pointer = vm.canvas.getPointer(e);
        var posx = pointer.x;
        var posy = pointer.y;

        vm.objInDraggability.createGridObject(posx, posy, vm.gridSize, function(obj) {
          if(obj) {
            vm.canvas.add(obj);
          }
        });
      }
    }

    function changeTabs(type) {
      vm.currentTabs = type;
    }

    function nextStep(cpt = 1) {
      //cpt = typeof cpt !== 'undefined' ? cpt : 1;
      vm.currentStep += cpt;

      switch (vm.currentStep) {
        case 1:
          //Prologue modal
          openModalPrologue();
          break;
        case 2:
          //Surprise round
          modalInstance.close();
          break;
        case 3:
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

    function init() {
      initializeCanvas();
      generateGrid();
    }

    function initializeCanvas() {
      vm.canvas = new fabric.Canvas('canvas', { selection: false });
      vm.canvas.setHeight((vm.gridLine + 1) * vm.gridSize);
      vm.canvas.setWidth((vm.gridCol + 1) * vm.gridSize);

      vm.canvas.on('object:moving', function(options) {
        if(options.target.content.moveAction) {
          options.target.content.moveAction(vm.gridSize);
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

    function openModalAddPnj() {
      modalInstance = $uibModal.open({
        templateUrl: 'views/rencontre/modalAddPnj.html',
        controllerAs: 'vmRC',
        bindToController: true,
        scope: $scope
      });
    }

    function closeModalAddPnj() {
      modalInstance.close();
    }

    function addPnjToRencontre(pnj) {
      var pnjCopy = {};
      angular.copy(pnj, pnjCopy);
      vm.pnjList.push(new BaseMob(pnjCopy));
    }

    init();
  }
})();
