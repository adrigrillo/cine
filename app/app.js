(function() {

	// Declare app level module which depends on views, and components
	var cine = angular.module("cine", ["firebase", "database", "user"]);



    /* Guarda como un array los datos de las películas obtenidas.
        Por ejemplo, si usamos "ng-controller = verPeliculas as peliculas" devuelve el array de todas
        las películas en 'peliculas' pudiendo acceder a las posiciones como peliculas[0] y dentro de
        esto a los atributos 'peliculas[0].titulo' */
	cine.controller("verPeliculas", ["$scope", "obtenerPeliculas", function($scope, obtenerPeliculas) {
    	$scope.peliculas = obtenerPeliculas;
        //En caso de error se informa por consola
    	$scope.peliculas.$loaded(function() {
      		if ($scope.peliculas.length === 0) {
        		console.error("No se han obtenido datos")
      		}
    	});
	}]);

    cine.controller("verCines", ["$scope", "obtenerCines", function($scope, obtenerCines) {
        $scope.cines = obtenerCines;
        //En caso de error se informa por consola
        $scope.cines.$loaded(function() {
            if ($scope.cines.length === 0) {
                console.error("No se han obtenido datos")
            }
        });
    }]);

})();
