'use strict';

angular.module('feedbackUiApp')
  .controller('IndexCtrl', function ($scope) {
    $scope.feedback = '';
    $scope.author = '';
});
