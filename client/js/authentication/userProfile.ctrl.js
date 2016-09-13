(function() {
  'use strict';

  angular.module('app')
    .controller('UserProfileCtrl', UserProfileCtrl);

  UserProfileCtrl.$inject = ['$window', '$rootScope', 'AuthService'];

  function UserProfileCtrl($window, $rootScope, AuthService) {
    var vm = this;

    //Variable list


    //Action list
    vm.logoutAction = logoutAction;
    
    //Function list
    function logoutAction() {
      AuthService.logout()
        .then(function() {
          $window.location.href = 'login.html';
        });
    }
  }
})();
