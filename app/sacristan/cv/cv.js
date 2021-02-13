'use strict';

angular.module('myApp.sacristan.cv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sacristan/cv', {
    templateUrl: 'sacristan/cv/cv.html',
    controller: 'cvCtrl'
  });
}])

.controller('cvCtrl', [function() {

}]);