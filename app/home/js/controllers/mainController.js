cine.controller('mainController', ['$scope', function($scope) {
  $scope.company = 'Entradas.com';
  $scope.tab1 = 'Películas'
  $scope.tab2 = 'Cines'

  $scope.caratula = 'img/Batman_v_Superman.jpg'
}]);

/* Controlador de las tabs */
cine.controller('mainController', function($scope) {
  $scope.company = 'Entradas.com';
  $scope.tab1 = 'Películas';
  $scope.tab2 = 'Cines';
});

/* Guarda como un array los datos de las películas obtenidas.
    Por ejemplo, si usamos "ng-controller = verPeliculas as peliculas" devuelve el array de todas
    las películas en 'peliculas' pudiendo acceder a las posiciones como peliculas[0] y dentro de
    esto a los atributos 'peliculas[0].titulo' */
cine.controller("verPeliculas", ["$scope", "obtenerPeliculas", function($scope, obtenerPeliculas) {
        $scope.peliculas = obtenerPeliculas;
        //En caso de error se informa por consola
        $scope.peliculas.$loaded(function() {
            if ($scope.peliculas.length === 0) {
              console.error("No se han obtenido datos");
            }
          })
        }]);
