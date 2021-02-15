'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.aubourg.cv',
    'myApp.aubourg.presentation',
    'myApp.valle.cv',
    'myApp.valle.presentation',
    'myApp.sacristan.cv',
    'myApp.sacristan.presentation',
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
        new Student("Gaizka", "Valle", "presentation", "cv"),
        new Student("Iker", "Sacristán", "presentation", "cv"),
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