function movieController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.movies = {
        1: {name: "Matrix", rating: 9., nbNotes: 100, index: 1},
        2: {name: "Back To the Future", rating: 9., nbNotes: 1, index: 2},
        3: {name: "Star Trek", rating: 7., nbNotes: 6, index: 3},
        4: {name: "Star Wars V", rating: 10., nbNotes: 100000, index: 4},
    };

    ctrl.update = function (movie, rating) {
        if (rating > -1 && rating < 11) {
            movie.rating = (parseFloat(rating) + movie.rating * movie.nbNotes) / (movie.nbNotes + 1);
            movie.nbNotes++;
            alert("Update done");
        }
    }
}

movieApp.component("movie", {
    templateUrl: "movie/movie.html",
    controller: movieController
});