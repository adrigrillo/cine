(function() {

	// Declare app level module which depends on views, and components
	var cine = angular.module("cine", ["firebase", "database"]);

	cine.controller("verPeliculas", ["$scope", "obtenerPeliculas", function($scope, obtenerPeliculas) {
    	$scope.peliculas = obtenerPeliculas;
        //En caso de error se mete una película genérica
    	$scope.peliculas.$loaded(function() {
      		if ($scope.peliculas.length === 0) {
        		$scope.peliculas.$add({
        			year: 2014,
        			titulo: "Esto esta mal",
        			productora: "Jesus enterteinment"
		        });
      		}
    	});
	}]);

})();
