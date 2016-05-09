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
			.when("/resumen", {
				templateUrl: "resumen.html"
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
			"precio": 0.0
		};
		$scope.steps = [
			{
				templateUrl: 'principal.html',
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
			$location.path('/home');
		};
		$scope.finish = function () {
			alert('Finish has been called. You are going to be redirected home!');
			$location.path('/home');
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
