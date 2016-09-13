(function() {
  'use strict';

  angular.module('app')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['Customer', '$q', '$rootScope', 'LoopBackAuth'];

  function AuthService(Customer, $q, $rootScope, LoopBackAuth) {
    function initCurrentUser() {
     return Customer
       .getCurrent()
       .$promise
       .then(function(response) {
           $rootScope.currentUser = response;
         },
         function(errorResponse) {
           $rootScope.currentUser = null;
         });
    }

    function login(email, password) {
      //Force Remember me
      var params = { rememberMe: true };

      return Customer
        .login(params, {email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = response;
        });
    }

    function logout() {
      return Customer
        .logout()
        .$promise
        .then(function() {
          $rootScope.currentUser = null;
        });
    }

    function register(firstname, lastname, email, password) {
      var data = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        username: firstname +  ' ' + lastname
      };

      return Customer
        .create(data)
        .$promise;
    }

    function getUserInfo() {
      return $rootScope.currentUser;
    }

    return {
      initCurrentUser: initCurrentUser,
      login: login,
      logout: logout,
      register: register,
      getUserInfo: getUserInfo
    };
  }
})();
