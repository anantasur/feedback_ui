'use strict';

/**
 * @ngdoc function
 * @name feedbackUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedbackUiApp
 */
angular.module('feedbackUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
