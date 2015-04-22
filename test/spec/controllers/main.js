'use strict';

describe('Controller: IndexCtrl', function() {

  beforeEach(module('feedbackUiApp'));

  var IndexCtrl, scope, httpMock;

  beforeEach(inject(function($controller, $rootScope, $httpBackend, $injector) {
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    httpMock = $httpBackend;
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should contain the feedback author name', function() {
    httpMock.expectGET("http://localhost:3000/feedback/123").respond({
      "comment": "hi",
      "author": "test"
    });
    httpMock.flush();
    expect(scope.feedback.author).toBe("test");
  });

});
