'use strict';

function todoController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.tasks = [
        {"name":"Change style CV","student":"Gaizka Valle","date":"2021-03-02T23:00:00.000Z","state":"In Progress"},
        {"name":"Fix letter","student":"Iker Sacristan","date":"2021-03-02T23:00:00.000Z","state":"In Progress"},
        {"name":"Improve TODO list","student":"Cyril Aubourg","date":"2021-03-02T23:00:00.000Z","state":"In Progress"},
    ];

    ctrl.addItem = function (formData) {
        formData.state = "In Progress";
        ctrl.errortext = "";
        var exists = false;
        for (let i = 0; i < ctrl.tasks.length; i++) {
            if (ctrl.verifyTasks(formData, ctrl.tasks[i])) {
                exists = true;
                break;
            }
        }
        if (exists) {
            ctrl.errortext = "The item is already in your todo list.";
        } else {
            ctrl.tasks.push(formData);
        }
    };

    ctrl.removeItem = function (x) {
        ctrl.errortext = "";
        ctrl.tasks.splice(x, 1);
    };

    ctrl.verifyTasks = function (task1, task2) {
        return JSON.stringify(task1) === JSON.stringify(task2);
    };
}


todo.component("todo", {
    bindings: {
        students: '<'
    },
    templateUrl: "todo/primary/primary.html",
    controller: todoController
});