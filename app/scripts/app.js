'use strict';

/**
 * @ngdoc overview
 * @name feedbackUiApp
 * @description
 * # feedbackUiApp
 *
 * Main module of the application.
 */
angular
  .module('feedbackUiApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
