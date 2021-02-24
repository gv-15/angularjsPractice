'use strict';

angular.module('myApp.aubourg.presentation', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/aubourg/presentation', {
            templateUrl: 'aubourg/presentation/presentation.html',
            controller: 'presCtrl'
        });
    }])

    .controller('presCtrl', [function () {

    }]);