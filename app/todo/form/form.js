"use strict";

function taskFormController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.formTask = {};
    $scope.date = new Date();

    ctrl.update = function () {
        ctrl.onUpdate({formData: ctrl.formTask});
        ctrl.formTask = {};
    };
}

todo.component("taskForm", {
    bindings: {
        students: '<',
        onUpdate: '&'
    },
    templateUrl: "todo/form/form.html",
    controller: taskFormController
});
