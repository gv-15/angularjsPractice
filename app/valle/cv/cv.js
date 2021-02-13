'use strict';

angular.module('myApp.valle.cv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/valle/cv', {
    templateUrl: 'valle/cv/cv.html',
    controller: 'cvCtrl'
  });
}])

.controller('cvCtrl', [function() {

}]);