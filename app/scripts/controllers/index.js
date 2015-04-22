'use strict'

var app = angular.module('feedbackUiApp');

app.controller('IndexCtrl', function($scope, Feedback) {
  $scope.author = 'Ananthu';
  Feedback.get().$promise.then(function(feedback) {
    $scope.feedback = feedback;
  });
});
