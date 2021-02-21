'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller('contactCtrl', function($scope) {
    $scope.formData = {};

    $scope.sendMail = function () {
        try {
            var nodemailer = require('nodemailer');

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'service.contact.vas@gmail.com',
                    pass: 'V1t0r14G4st31z'
                }
            });

            var mailOptions = {
                from: 'service.contact.vas@gmail.com',
                to: 'service.contact.vas@gmail.com',
                subject: $scope.formData.name + " - " + $scope.formData.subject,
                text: $scope.formData.main
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        } catch (e) {
            alert("No server found");
        }
    };
});