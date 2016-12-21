(function () {
  'use strict';

  angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/home");


      $stateProvider
      //------------------------------
      // HOME
      //------------------------------
        .state('home', {
          url: '/home',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/home.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'css',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/fullcalendar/dist/fullcalendar.min.css'
                  ]
                },
                {
                  name: 'vendors',
                  insertBefore: '#app-level-js',
                  files: [
                    'vendors/sparklines/jquery.sparkline.min.js',
                    'vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                    'vendors/bower_components/simpleWeather/jquery.simpleWeather.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('campaign-detail', {
          templateUrl: 'views/campaign/detail-common.html'
        })
        .state('campaign-detail.library', {
          url: '/campaign/detail/:campaignId/library',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/campaign/library.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('campaign-detail.story', {
          url: '/campaign/detail/:campaignId/story',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/campaign/story.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('campaign-detail.map', {
          url: '/campaign/detail/:campaignId/map',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/campaign/map.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('campaign-detail.rencontre', {
          url: '/campaign/detail/:campaignId/:rencontreId/rencontre',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/campaign/rencontre.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('campaign', {
          templateUrl: 'views/common.html'
        })
        .state('campaign.list', {
          url: '/campaign',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/campaign/list.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('directory', {
          templateUrl: 'views/common.html'
        })
        .state('directory.news', {
          url: '/news',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/news.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('directory.jdrpnj', {
          url: '/jdrpnj',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/jdrpnj.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('directory.rencontre', {
          url: '/rencontre',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/rencontre.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('directory.rencontreCreate', {
          url: '/rencontre/create',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/rencontre/create.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
        .state('directory.rencontreDetail', {
          url: '/rencontre/:rencontreId',
          data: {
            requireLogin: true
          },
          templateUrl: 'views/rencontre/detail.html',
          resolve: {
            loadPlugin: function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'vendors',
                  insertBefore: '#app-level',
                  files: [
                    'vendors/bower_components/autosize/dist/autosize.min.js',
                    'vendors/bower_components/lightgallery/light-gallery/css/lightGallery.css'
                  ]
                },
                {
                  name: 'vendors',
                  files: [
                    'vendors/bower_components/mediaelement/build/mediaelement-and-player.js',
                    'vendors/bower_components/lightgallery/light-gallery/js/lightGallery.min.js'
                  ]
                }
              ])
            }
          }
        })
    })
    .run(function ($window, $rootScope, $state, $injector, LoopBackAuth, AuthService, cfpLoadingBar) {

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        cfpLoadingBar.start();

        var requireLogin = toState.data.requireLogin;

        //Force login user
        if(!$rootScope.currentUser && LoopBackAuth.accessTokenId) {
          AuthService
            .initCurrentUser()
            .then(function(response) {
                if($rootScope.currentUser == null) {
                  event.preventDefault();
                  $window.location.href = '/login.html';
                }
              });
        } else if (requireLogin && !$rootScope.currentUser) {
          event.preventDefault(); //prevent current page from loading
          $window.location.href = '/login.html';
        }
      });

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
        cfpLoadingBar.complete();
      });
    });

})();
