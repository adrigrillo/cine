(function() {
	/* EN ESTA CLASE VAMOS A RECOGER LOS DIFERENTES DATOS DE LA BASE DE DATOS */
	var cine = angular.module("database", ["firebase"]);

	// Metodo para obtener los datos de las películas, devuelve un array con las películas
	cine.factory("obtenerPeliculas", ["$firebaseArray", function($firebaseArray){
		var ref = new Firebase("https://cinedsi.firebaseio.com/peliculas");
		return $firebaseArray(ref);
	}]);

	// Metodo para obtener los datos de los cines, devuelve un array con las cines
	cine.factory("obtenerCines", ["$firebaseArray", function($firebaseArray){
		var ref = new Firebase("https://cinedsi.firebaseio.com/cines");
		return $firebaseArray(ref);
	}]);

	//Metodo para obtener un solo cine, devuelve un objeto cine
	cine.factory("cine", ["$firebaseObject", function($firebaseObject){
		//Retornamos el objeto con el nombre indicado
    	return function sacarCine(name){
			var ref = new Firebase("https://cinedsi.firebaseio.com/cines");
			var profileRef = ref.child(name);
		    return $firebaseObject(profileRef);
    	};
  	}
]);
})();
