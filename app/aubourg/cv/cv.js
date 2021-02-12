'use strict';

angular.module('myApp.aubourg.cv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aubourg/cv', {
    templateUrl: 'aubourg/cv/cv.html',
    controller: 'cvCtrl'
  });
}])

.controller('cvCtrl', [function() {

}]);