'use strict';

var todo = angular.module('myApp.todo', ['ngRoute']);

todo.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/todo', {
            templateUrl: 'todo/todo.html',
            controller: 'TodoCtrl'
        });
    }])

    .controller('TodoCtrl', function ($scope) {});