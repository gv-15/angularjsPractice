'use strict';

function todoController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.idForm = 'formDiv';
    ctrl.editMode = [false, false, false];
    ctrl.states = ["In Progress", "Done", "Rejected"];

    ctrl.tasks = [
        {"name":"Change style CV","student":"Gaizka Valle","date":"2021-03-02T23:00:00.000Z","state":"In Progress"},
        {"name":"Fix letter","student":"Iker Sacristan","date":"2021-03-02T23:00:00.000Z","state":"In Progress"},
        {"name":"Improve TODO list","student":"Cyril Aubourg","date":"2021-03-02T23:00:00.000Z","state":"In Progress"},
    ];

    ctrl.addItem = function (formData) {
        formData.state = "In Progress";  //default state
        ctrl.errortext = "";
        var exists = false;
        for (let i = 0; i < ctrl.tasks.length; i++) {
            if (ctrl.verifyTasks(formData, ctrl.tasks[i])) {
                exists = true;
                break;
            }
        }
        if (exists) {
            ctrl.errortext = "The item is already in the duty list.";
        } else {
            ctrl.editMode.push(false);
            ctrl.tasks.push(formData);
            ctrl.hideTaskForm();
        }
    };

    ctrl.removeItem = function (x) {
        ctrl.errortext = "";
        ctrl.tasks.splice(x, 1);
    };

    ctrl.updateItem = function (x) {
        if (ctrl.editMode[x]) {
            ctrl.errortext = "";
            ctrl.tasks[x].state = ctrl.newState;  //retrieve state from the update in the view
            ctrl.editMode[x] = false;
        } else {
            ctrl.editMode[x] = true;
        }
    };

    ctrl.verifyTasks = function (task1, task2) {
        return JSON.stringify(task1) === JSON.stringify(task2);
    };

    ctrl.showTaskForm = function () {
        document.getElementById(ctrl.idForm).style.display = 'block';
    };

    ctrl.hideTaskForm = function () {
        document.getElementById(ctrl.idForm).style.display = 'none';
    };
}


todo.component("todo", {
    bindings: {
        students: '<'   //retrieve students from app.js ('<' to retrieve the JSON, '@' for the string version)
    },
    templateUrl: "todo/primary/primary.html",
    controller: todoController
});