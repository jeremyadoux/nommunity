(function() {
  'use strict';

  angular.module('app')
    .controller("NewsListCtrl", NewsListCtrl);

  NewsListCtrl.$inject = ['NewsService'];

  function NewsListCtrl(NewsService) {
    var vm = this;

    init();

    // Init variable
    vm.newsList = [];
    vm.totalItems = 0;
    vm.currentPage = 1;
    vm.maxItems = 10;
    vm.filter = {};

    // Init Method
    vm.getNews = getNews;
    vm.countNews = countNews;
    vm.setPage = setPage;

    function init() {
      countNews();
      getNews();
    }

    function getNews() {
      NewsService.load({
        limit: vm.maxItems,
        skip: (vm.maxItems*(vm.currentPage - 1)),
        order: 'createdAt DESC'
      })
        .then(function(newsList) {
          console.log(newsList);
          vm.newsList = newsList;
        });
    }

    function countNews() {
      NewsService.count({})
        .then(function(countable) {
          vm.totalItems=countable.count;
        });
    }

    function setPage(pageNo) {
      vm.currentPage = pageNo;
    }
  }

})();
