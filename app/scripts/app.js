'use strict';
angular
  .module('feedbackUiApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });