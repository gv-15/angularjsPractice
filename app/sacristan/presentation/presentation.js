'use strict';

angular.module('myApp.sacristan.presentation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sacristan/presentation', {
    templateUrl: 'sacristan/presentation/presentation.html',
    controller: 'presCtrl'
  });
}])

.controller('presCtrl', [function() {

}]);