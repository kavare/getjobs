'use strict';

angular.module('neocareer', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as mainCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl as dashboardCtrl'
      })
      .state('wishlist', {
        url: '/wishlist',
        templateUrl: 'app/wishlist/wishlist.html',
        controller: 'WishlistCtrl as wishlistCtrl'
      })
      .state('progress', {
        url: '/progress',
        templateUrl: 'app/progress/progress.html',
        controller: 'ProgressCtrl as progressCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
