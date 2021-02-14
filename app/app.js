'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.aubourg.cv',
    'myApp.aubourg.presentation',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngAnimate'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('menuCtrl', function($scope) {
    $scope.students = [
        new Student("Cyril", "Aubourg", "presentation", "cv"),
        new Student("Gaizka", "Valle Zabala", "cv", "cv"),
        new Student("Iker", "Sacristán Ortiz", "view1", "view2"),
    ];
});


class Student {
    constructor(name, surname, card, cv) {
        this.name = name;
        this.surname = surname;
        this.card = card;
        this.cv = cv;
        this.menu = false;
    }

    fullname() {
        return this.name + " " + this.surname;
    }

    getCard() {
        return this.surname.toLowerCase() + "/" + this.card;
    }

    getCV() {
        return this.surname.toLowerCase() + "/" + this.cv;
    }

    getMenu() {
        return this.menu;
    }

    setMenu(bool) {
        this.menu = bool;
    }
}