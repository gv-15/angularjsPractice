'use strict';

var movieApp = angular.module('myApp.movie', ['ngMaterial', 'ngMessages', 'ngRoute']);


movieApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/compoDemo', {
        templateUrl: 'compoDemo/appMaterial/index.html',
        controller: 'compoDemoCtrl'
    });
}])

    .controller('compoDemoCtrl', function ($scope) {
    });
