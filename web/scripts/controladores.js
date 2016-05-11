(function() {

    // Declare app level module which depends on views, and components
    var ctrl = angular.module("ctrl", ["ngMaterial", "firebase", "database"]);

    /* Controlador de las tabs */
    ctrl.controller('tabController', function($scope){
        $scope.tab1 = 'Películas';
        $scope.tab2 = 'Cines';
    });

    /* Guarda como un array los datos de las películas obtenidas.
        Por ejemplo, si usamos "ng-controller = verPeliculas as peliculas" devuelve el array de todas
        las películas en 'peliculas' pudiendo acceder a las posiciones como peliculas[0] y dentro de
        esto a los atributos 'peliculas[0].titulo'
    */
    ctrl.controller("verPeliculas", ["$scope", "obtenerPeliculas", function($scope, obtenerPeliculas) {
        $scope.peliculas = obtenerPeliculas;
        //En caso de error se informa por consola
        $scope.peliculas.$loaded(function() {
            if ($scope.peliculas.length === 0) {
                console.error("No se han obtenido datos");
            }
        });
    }]);

    // Guarda un array de datos de todos los cines obtenidos
    ctrl.controller("verCines", ["$scope", "obtenerCines", function($scope, obtenerCines) {
        $scope.cines = obtenerCines;
        //En caso de error se informa por consola
        $scope.cines.$loaded(function() {
            if ($scope.cines.length === 0) {
                console.error("No se han obtenido datos");
            }
        });
    }]);

    // Guarda en un objeto el cine requerido
    ctrl.controller("verCine", ["$scope", "cine", function($scope, cine) {
        function nombreCine(nombre) {
            $scope.cine = cine(nombre);
            console.error("Ha entrado");
            $scope.cine.$loaded(function() {
                console.error("Ha funcionado");
                if ($scope.cines === null) {
                    console.error("No se han obtenido datos");
                }
            });
        }
    }]);
    //Controlador para controlar numero de asientos, sus filas y sus columnas
    ctrl.controller('SelectedTextController', function($scope) {
      $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      $scope.selectedItem = 0;
      $scope.filas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      $scope.selectedFila;
      $scope.columnas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      $scope.selectedColumna;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return "Has seleccionado: Item " + $scope.selectedItem;
        } else {
          return "Por favor, selecciona un número de butacas.";
        }
      };
      $scope.getSelectedFila = function() {
        if ($scope.selectedFila !== undefined) {
          return "Has seleccionado la fila: Item " + $scope.selectedFila;
        } else {
          return "Por favor, selecciona una fila";
        }
      };
      $scope.getSelectedColumna = function() {
        if ($scope.selectedColumna !== undefined) {
          return "Has seleccionado la columna: Item " + $scope.selectedColumna;
        } else {
          return "Por favor, selecciona una columna";
        }
      };

      $scope.myClickEvent1 = function() {
        alert('one selected');
      };

    });

    // Controlador que muestra la ventana emergente con la informacion de la pelicula
    ctrl.controller("CuadroInfo", function($scope, $mdDialog, $mdMedia) {
        $scope.status = '  ';
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm({
                controller: DialogController,
                templateUrl: 'infoPeli.html',
                clickOutsideToClose: true,
                scope: $scope.$new(),
                parent: angular.element(document.body),
                targetEvent: ev,
            });
            $mdDialog.show(confirm).then(function() {
                $scope.status = 'Confirm resolved';
                $scope.codeRunningBeforeResolve = 'code only runs after resolve';
            });

            $scope.codeRunningBeforeResolve = 'code is running before resolve!';
        };
    });

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    // Controlador para los pagos de la aplicación
    ctrl.controller('DemoCtrl', function($scope) {
        $scope.user = {
            nombre: '',
            apellidos: '',
            address: '',
            city: '',
            provincia: '',
            modopago: '-',
            postalCode: '',
            pago: '',
            ano: '',
            mes: '',
            cvc: '',
        };
        $scope.provincias = ('Madrid,Asturias,Alicante,Badajoz,Ciudad Real, La Coruña,Huelva,Barcelona').split(',').map(function(provincia) {
            return {
                abbrev: provincia
            };
        });

        $scope.anos = ('2016 2017 2018 2019 2020 2021 2022 2023').split(' ').map(function(años) {
            return {
                abbrev: años
            };
        });

        $scope.meses = ('1 2 3 4 5 6 7 8 9 10 11 12').split(' ').map(function(meses) {
            return {
                abbrev: meses
            };
        });

        $scope.pagos = ('PayPal, Tarjeta').split(',').map(function(pago) {
            return {
                abbrev: pago
            };
        });
    });
})();
