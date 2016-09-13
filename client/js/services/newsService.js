(function() {
  'use strict';

  angular.module('app')
    .factory("NewsService", NewsService);

  NewsService.$inject = ['News'];


  function NewsService(News) {
    function create(data) {
      var newsProtected = {
        title: data.title,
        description: data.description,
        status: data.status || 0
      };

      return News.create(newsProtected)
        .$promise;
    }

    function save() {

    }

    function remove() {

    }

    function count(filter) {
      return News.count({filter: filter})
        .$promise;
    }

    function load(filter) {
      filter.include = "author";

      return News.find({filter: filter})
        .$promise;

    }

    function loadById() {

    }

    return {
      create: create,
      save: save,
      remove: remove,
      count: count,
      load: load,
      loadById: loadById
    };

  }
})();
