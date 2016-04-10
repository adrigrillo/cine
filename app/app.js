(function() {

	// Declare app level module which depends on views, and components
	var cine = angular.module("cine", ["firebase"]);
	cine.factory("obtenerDatos", ["$firebaseArray", function($firebaseArray){
		var ref = new Firebase("https://cinedsi.firebaseio.com/peliculas");
		return $firebaseArray(ref);
	}]);

	cine.controller("verPeliculas", ["$scope", "obtenerDatos", function($scope, obtenerDatos) {
    	console.log('Array de firebase: %O', obtenerDatos);
    	$scope.peliculas = obtenerDatos;
    	$scope.peliculas.$loaded(function() {
      		if ($scope.peliculas.length === 0) {
        		$scope.peliculas.$add({
        			year: 2014,
        			titulo: "Esto esta mal",
        			productora: "Jesus enterteinment"
		        });
      		}
    	});
    	console.log('Array de final: %O', $scope.peliculas);
	}]);

})();
