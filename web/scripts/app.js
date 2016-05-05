(function() {

    // Declare app level module which depends on views, and components
    var cine = angular.module("cine", ["ctrl"]);

    /* Configurar tema */
    cine.config(function($mdThemingProvider) {
        $mdThemingProvider.theme("default") /* color palette */
            .primaryPalette("indigo")
            .accentPalette("yellow")
            .warnPalette("pink")
            .backgroundPalette('indigo', {
                'default': '50'
            });
    });

    /* Directiva de los steps */
	cine.controller('steps', function($scope){
		$scope.model = {
			"pelicula": "-",
			"cines": "-",
			"sesion": "-",
			"asientos": "-",
			"precio": 0.0
		};
		$scope.steps = [
			{
				templateUrl: 'lista-peliculas.html',
				title: '10'
			},
			{
				templateUrl: 'lista-cines.html',
				title: '30'
			},
			{
				template: 'tal',
				title: '60'
			},
			{
				template: 'bye',
				title: '90'
			},
		];
		$scope.cancel = function () {
			alert('Formulario cancelado, será redirigido a la página principal');
			$location.path('/plantilla');
		};
	});


	/* Directiva div informacion proceso de compra */
	cine.directive('infoProceso', function(){
		return{
			restrict: 'E',
			templateUrl: 'info-proceso.html'
		};
	});

    /* Directiva para añadir la seccion peliculas a index */
    cine.directive('listaPeliculas', function(){
        return{
            restrict: 'E',
            templateUrl: 'lista-peliculas.html'
        };
    });

    /* Directiva para añadir la seccion cines a index */
    cine.directive('listaCines', function(){
        return{
            restrict: 'E',
            templateUrl: 'lista-cines.html'
        };
    });
})();
