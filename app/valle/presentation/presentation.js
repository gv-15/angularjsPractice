'use strict';

angular.module('myApp.valle.presentation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/valle/presentation', {
    templateUrl: 'valle/presentation/presentation.html',
    controller: 'presCtrl'
  });
}])

.controller('presCtrl', [function() {

}]);