(function() {
  'use strict';

  angular.module('app')
    .controller("NewsFormCtrl", NewsFormCtrl);

  NewsFormCtrl.$inject = ["NewsService", "growlService"];

  function NewsFormCtrl(NewsService, growlService) {
    var vm = this;

    //Init var
    vm.form = {
      news : {
        title: '',
        description: ''
      }
    };

    //Action list
    vm.saveAction = saveAction;

    //Function list
    function saveAction(form) {
      if(form.$valid) {
        NewsService.create(vm.form.news)
          .then(function (news) {
            growlService.growl("Your news " + news.title + " have been created.", "success");
            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }
            angular.copy({}, vm.form.news);
          });
      } else {
        growlService.growl("Please check the form to create news, you have any errors.", "danger");
      }
    }
  }
})();
