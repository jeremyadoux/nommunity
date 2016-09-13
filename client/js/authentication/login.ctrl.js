(function() {
  'use strict';

  angular.module('app')
    .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$window', 'AuthService', 'growlService'];

  function loginCtrl($window, AuthService, growlService){
    var vm = this;

    //Status
    vm.login = 1;
    vm.register = 0;
    vm.forgot = 0;
    vm.loginForm = {
      username: '',
      password: '',
      rememberMe: true
    };
    vm.registerForm = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };

    //Action
    vm.loginAction = loginAction;
    vm.registerAction = registerAction;

    //Function list
    function loginAction() {
      AuthService.login(vm.loginForm.email, vm.loginForm.password)
        .then(function() {
          $window.location.href = '/';
        }, function(errorResponse) {
          growlService.growl(errorResponse.data.error.message, "danger");
        });
    }

    function registerAction() {
      AuthService.register(vm.registerForm.firstname, vm.registerForm.lastname, vm.registerForm.email, vm.registerForm.password)
        .then(function(response) {
          growlService.growl("Your account have been registered, you will receive an email to confirm your subscription.", "success");
          vm.login = 1;
          vm.register = 0;
          vm.forgot = 0;
        }, function(errorResponse) {
          growlService.growl(errorResponse.data.error.message, "danger");
        });
    }
  }
})();
