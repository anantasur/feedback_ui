'use strict';

var app = angular.module('feedbackUiApp');

app.factory('Feedback', function ($resource) {
  return $resource('http://localhost:3000/feedback/123', {id: '@id'});
});
