'use strict';

describe('todo', function () {

    beforeEach(module('myApp.todo'));

    var $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('todoController', function () {

        it('should verify that two json are equal', inject(function($componentController) {
            var ctrl = $componentController('todo');

            var json1 = {name: "test"};
            var json2 = {name: "test"};

            expect(ctrl.verifyTasks(json1, json2)).toBe(true);
        }));

        it('should verify that two json are not equal', inject(function($componentController) {
            var ctrl = $componentController('todo');

            var json1 = {name: "test11"};
            var json2 = {name: "test22"};

            expect(ctrl.verifyTasks(json1, json2)).toBe(false);
        }));

        it('should add a new item', inject(function($componentController) {
            var ctrl = $componentController('todo');
            var json1 = {"name":"Change style CV","student":"Gaizka Valle","date":"2022-03-02T23:00:00.000Z"};
            ctrl.addItem(json1);
            expect(ctrl.tasks.length).toBe(4);
        }));

        it('should not add a new item', inject(function($componentController) {
            var ctrl = $componentController('todo');
            var json1 = {"name":"Improve TODO list","student":"Cyril Aubourg","date":"2021-03-02T23:00:00.000Z"};
            ctrl.addItem(json1);
            expect(ctrl.tasks.length).toBe(3);
        }));

        it('should remove an item', inject(function($componentController) {
            var ctrl = $componentController('todo');
            var clone = JSON.parse(JSON.stringify(ctrl.tasks));
            delete clone[0];
            ctrl.removeItem(0);
            expect(ctrl.tasks.length).toBe(2);
            expect(ctrl.tasks).toBe(clone);
        }));

        it('should update an item', inject(function($componentController) {
            var ctrl = $componentController('todo');
            ctrl.editMode[0] = true;
            ctrl.newState = "Done";
            var clone = JSON.parse(JSON.stringify(ctrl.tasks));
            clone[0].state = "Done";
            ctrl.updateItem(0);
            expect(ctrl.tasks).toBe(clone);
        }));

        it('should not update an item', inject(function($componentController) {
            var ctrl = $componentController('todo');
            ctrl.editMode[0] = false;
            ctrl.newState = "Done";
            var clone = JSON.parse(JSON.stringify(ctrl.tasks));
            ctrl.updateItem(0);
            expect(ctrl.tasks).toBe(clone);
        }));



    });
});