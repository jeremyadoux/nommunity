(function() {
  'use strict';

  angular
    .module('app')
    .controller('PNJController', PNJController);

  PNJController.$inject = ['$scope', '$timeout', 'JDRPNJService', 'growlService', 'PagerService'];

  function PNJController($scope, $timeout, JDRPNJService, growlService, PagerService) {
    var vm = this;
    var currentEditedPNJ = {};

    //Method
    vm.addMorePower = addMorePower;
    vm.addMoreSkill = addMoreSkill;
    vm.saveFormAction = saveFormAction;
    vm.edit = edit;
    vm.setPage = setPage;
    vm.getPeril = getPeril;
    vm.nextInfinitePage = nextInfinitePage;

    //Variable
    vm.formPNJ = {
      power: [
        {
          name: '',
          versus: '',
          degatdice: '',
          description: ''
        }
      ],
      skill: [
        {
          name: '',
          value: 0
        }
      ]
    };
    vm.pnjList = [];
    vm.pager = {};
    vm.totalItems = 10;
    vm.currentPnjPage = 1;
    vm.filter = '';
    vm.inLoadingNextPage = false;

    initController();

    $scope.$watch('vmPnj.filter', function (newValue, oldValue) {
      $timeout(function() {
        $('.modal-body-infinite-scroll').animate({ scrollTop: 0 }, 'fast');
        nextInfinitePage = true;
        vm.currentPnjPage = 1;
        vm.setPage();
      }, 300);
    });

    function initController() {
      vm.inLoadingNextPage = true;
      // initialize to page 1
      vm.currentPnjPage = 1;
      vm.setPage();
    }

    function nextInfinitePage() {
      if(!vm.inLoadingNextPage) {
        vm.inLoadingNextPage = true;
        vm.currentPnjPage++;
        vm.setPage();
        console.log('next page');
      }
    }

    function setPage() {
      var page = vm.currentPnjPage;
      if (page < 1 || page > vm.pager.totalPages) {
        return;
      }
      //Prepare parameter
      var parameterFilter = {};
      if(vm.filter) {
        parameterFilter.where = {
          name: {regexp : '/.*'+vm.filter+'.*/i'}
        }
      }

      //Count element
      JDRPNJService.count(parameterFilter)
        .then(function(countable) {
          // get pager object from service
          vm.pager = PagerService.GetPager(countable.count, page);
          vm.totalItems = vm.pager.totalPages * 10;
          // get current page of items
          parameterFilter.limit = vm.pager.pageSize;
          parameterFilter.skip = vm.pager.startIndex;
          parameterFilter.order = 'name ASC';
          JDRPNJService.load(parameterFilter)
            .then(function(pnjList) {
              if(vm.currentPnjPage === 1) {
                vm.pnjList = pnjList;
              } else {
                vm.pnjList = vm.pnjList.concat(pnjList);
              }
              vm.inLoadingNextPage = false;
            });
        });
    }

    function saveFormAction(form) {
      if(form.$valid) {
        if(typeof(vm.formPNJ.$save) == "function") {
          vm.formPNJ.$save().then(function(pnj) {
            growlService.growl("Your PNJ " + pnj.name + " have been updated.", "success");
            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }

            vm.formPNJ = {
              power: [
                {
                  name: '',
                  versus: '',
                  degatdice: '',
                  description: ''
                }
              ],
              skill: [
                {
                  name: '',
                  value: 0
                }
              ]
            };
          });
        } else {
          JDRPNJService.create(vm.formPNJ).then(
            function (pnj) {
              growlService.growl("Your PNJ " + pnj.name + " have been created.", "success");
              if (form) {
                form.$setPristine();
                form.$setUntouched();
              }growlService.growl("Your PNJ " + pnj.name + " have been created.", "success");
              if (form) {
                form.$setPristine();
                form.$setUntouched();
              }

              vm.formPNJ = {
                power: [
                  {
                    name: '',
                    versus: '',
                    degatdice: '',
                    description: ''
                  }
                ],
                skill: [
                  {
                    name: '',
                    value: 0
                  }
                ]
              };
            }
          );
        }
      } else {
        growlService.growl("Please check the form to create pnj, you have any errors.", "danger");
      }
    }

    function addMorePower() {
      vm.formPNJ.power.push({
        name: '',
        versus: '',
        degatdice: '',
        description: ''
      });
    }

    function addMoreSkill() {
      vm.formPNJ.skill.push({
        name: '',
        value: ''
      });
    }

    function getPeril(pv) {
      return Math.floor(pv/2);
    }

    function edit(pnj) {
      vm.formPNJ = pnj;
      if(typeof vm.formPNJ.skill == "undefined" || vm.formPNJ.skill.length <= 0) {
        vm.formPNJ.skill = [
          {
            name: '',
            value: 0
          }
        ];
      }
    }
  }

})();
