function movieController($scope, $mdDialog) {
    var ctrl = this;

    ctrl.movies = {
        1: {name: "Matrix", rating: 9., nbNotes: 100, index: 1},
        2: {name: "Back To the Future", rating: 9., nbNotes: 1, index: 2},
        3: {name: "Star Trek", rating: 7., nbNotes: 6, index: 3},
        4: {name: "Star Wars V", rating: 10., nbNotes: 100000, index: 4},
    };

    ctrl.showAlert = function (ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Rating')
                .textContent('Update done')
                .ariaLabel('Alert Dialog Demo')
                .ok('Done')
                .targetEvent(ev)
        );
    };

    ctrl.update = function (movie, rating, $event) {
        if (rating > -1 && rating < 11) {
            movie.rating = (parseFloat(rating) + movie.rating * movie.nbNotes) / (movie.nbNotes + 1);
            movie.nbNotes++;
            ctrl.showAlert($event);
        }
    }
}

movieApp.component("movie", {
    templateUrl: "compoDemo/appMaterial/movie/movie.html",
    controller: movieController
});