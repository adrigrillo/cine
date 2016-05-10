(function() {

	// Declare app level module which depends on views, and components
	var cine = angular.module("cine", ["ngMaterial", "ngRoute", "ctrl", "multiStepForm"]);

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

	/* Routeador */
	cine.config(function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "formulario.html"
			})
			.when("/home", {
				templateUrl: "formulario.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	});

	/* Directiva de los steps */
	cine.controller('steps', function($scope, $location, $route){
		$scope.model = {
			"pelicula": "-",
			"cines": "-",
			"sesion": "-",
			"asientos": "-",
			"numero": 0,
			"precio": 0.0
		};
		$scope.steps = [
			{
				templateUrl: 'principal.html',
				title: '0'
			},
			{
				templateUrl: 'lista-peliculas.html',
				title: '33'
			},
			{
				templateUrl: 'lista-cines.html',
				title: '33'
			},
			{
				templateUrl: 'asientos.html',
				title: '66'
			},
			{
				templateUrl: 'pago.html',
				title: '100'
			},
			{
				templateUrl: 'resumen.html',
				title: '100'
			}
		];
		$scope.cancel = function () {
			alert('Compra cancelada, será redirigido a la página principal');
			$location.path('/home');
			$route.reload();
		};
		$scope.finish = function () {
			$location.path('/home');
			$route.reload();
		};
	});


	/* Directiva div informacion proceso de compra */
	cine.directive('formulario', function(){
		return{
			restrict: 'E',
			templateUrl: 'formulario.html'
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
