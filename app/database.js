(function() {
	/* EN ESTA CLASE VAMOS A RECOGER LOS DIFERENTES DATOS DE LA BASE DE DATOS */
	var cine = angular.module("database", ["firebase"]);

	// Metodo para obtener los datos de las películas, devuelve un array con las películas
	cine.factory("obtenerPeliculas", ["$firebaseArray", function($firebaseArray){
		var ref = new Firebase("https://cinedsi.firebaseio.com/peliculas");
		return $firebaseArray(ref);
	}]);
})();
