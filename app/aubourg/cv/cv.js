'use strict';

angular.module('myApp.aubourg.cv', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/aubourg/cv', {
            templateUrl: 'aubourg/cv/cv.html',
            controller: 'cvCtrl'
        });
    }])

    .controller('cvCtrl', [function () {

    }]);

function showContent(elementName, id) {
    document.getElementById(elementName).classList.remove("hide");
    document.getElementById(id).value = "-";
    document.getElementById(id).onclick = function () {
        hideContent(elementName, id);
    };
    return;
}

function hideContent(elementName, id) {
    document.getElementById(elementName).classList.add("hide");
    document.getElementById(id).value = "+";
    document.getElementById(id).onclick = function () {
        showContent(elementName, id);
    };
    return;
}