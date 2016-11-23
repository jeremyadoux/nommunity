(function() {
  "use strict";

  angular
    .module('app')
    .controller('CampaignList', CampaignList);

  CampaignList.$inject = ['$scope', '$timeout', 'CampaignService', 'PagerService'];

  function CampaignList($scope, $timeout, CampaignService, PagerService) {
    var vm = this;

    vm.setPage = setPage;

    vm.list = [];
    vm.pager = {};
    vm.totalItems = 10;
    vm.currentPage = 1;
    vm.filter = '';
    vm.listviewSearchStat = false;

    $scope.$watch('vmCL.filter', function (newValue, oldValue) {
      $timeout(function() {
        vm.currentPage = 1;
        vm.setPage();
      }, 300);
    });

    function setPage() {
      var page = vm.currentPage;
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
      CampaignService.count(parameterFilter)
        .then(function(countable) {
          // get pager object from service
          vm.pager = PagerService.GetPager(countable.count, page);
          vm.totalItems = vm.pager.totalPages * 10;
          // get current page of items
          parameterFilter.limit = vm.pager.pageSize;
          parameterFilter.skip = vm.pager.startIndex;
          parameterFilter.order = 'name ASC';
          CampaignService.load(parameterFilter)
            .then(function(list) {
              vm.list = list;
            });
        });
    }

    function init() {
      vm.currentPage = 1;
      vm.setPage();
    }

    init();
  }
})();
