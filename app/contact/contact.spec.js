'use strict';

describe('myApp.contact module', function () {

    beforeEach(module('myApp.contact'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('contact controller', function () {

        it('should test window open event', inject(function ($window) {
            var $scope = $rootScope.$new();
            $scope.formData = {name: 'bill', subject: 'test', main: 'test'};
            spyOn($window, 'open').and.callFake(function () {
                return true;
            });
            $scope.sendMail();
            expect($window.open).toHaveBeenCalled();
            expect($window.open).toHaveBeenCalledWith("mailto:service.contact.vas@gmail.com?subject=bob - test&body=test");
        }));

    });
});