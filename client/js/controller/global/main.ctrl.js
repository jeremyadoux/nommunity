/**
 * Created by jadoux on 13/07/2016.
 */

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$window', '$timeout', '$state', '$scope', '$rootScope', 'growlService', 'AuthService'];

  function MainController($window, $timeout, $state, $scope, $rootScope, growlService, AuthService) {
    var vm = this;

    init();

    // Detect Mobile Browser
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      angular.element('html').addClass('ismobile');
    }

    // By default Sidbars are hidden in boxed layout and in wide layout only the right sidebar is hidden.
    vm.sidebarToggle = {
      left: false,
      right: false
    };

    // By default template has a boxed layout
    vm.layoutType = localStorage.getItem('ma-layout-status');

    // For Mainmenu Active Class
    vm.$state = $state;

    //Close sidebar on click
    vm.sidebarStat = function(event) {
      if (!angular.element(event.target).parent().hasClass('active')) {
        vm.sidebarToggle.left = false;
      }
    };

    //Listview Search (Check listview pages)
    vm.listviewSearchStat = false;

    vm.lvSearch = function() {
      vm.listviewSearchStat = true;
    };

    //Listview menu toggle in small screens
    vm.lvMenuStat = false;

    //Blog
    vm.wallCommenting = [];

    vm.wallImage = false;
    vm.wallVideo = false;
    vm.wallLink = false;

    //Skin Switch
    vm.currentSkin = 'blue';

    vm.skinList = [
      'lightblue',
      'bluegray',
      'cyan',
      'teal',
      'green',
      'orange',
      'blue',
      'purple'
    ];

    vm.skinSwitch = function (color) {
      vm.currentSkin = color;
    };

    function init() {
      AuthService.initCurrentUser().then(function(response) {
        if($rootScope.currentUser != null) {
          //Welcome Message
          growlService.growl('Welcome back ' + $rootScope.currentUser.username + ' !', 'inverse');
        }
      });
    }
  }
})();
