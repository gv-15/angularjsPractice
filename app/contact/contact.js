'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'contactCtrl'
        });
    }])

    .controller('contactCtrl', function ($scope, $window) {
        $scope.formData = {};

        $scope.sendMail = function () {
            $window.open("mailto:service.contact.vas@gmail.com?subject=" + $scope.formData.name + " - " + $scope.formData.subject + "&body=" + $scope.formData.main, "_self");
        };
    });