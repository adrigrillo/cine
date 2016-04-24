(function() {

    // Declare app level module which depends on views, and components
    var cine = angular.module("cine", ["ngMaterial", "firebase", "database"]);

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

    /* Controlador de las tabs */
    cine.controller('mainController', function($scope) {
        $scope.company = 'Entradas.com';
        $scope.tab1 = 'Películas';
        $scope.tab2 = 'Cines';
    });

    /* Guarda como un array los datos de las películas obtenidas.
        Por ejemplo, si usamos "ng-controller = verPeliculas as peliculas" devuelve el array de todas
        las películas en 'peliculas' pudiendo acceder a las posiciones como peliculas[0] y dentro de
        esto a los atributos 'peliculas[0].titulo'
    */
    cine.controller("verPeliculas", ["$scope", "obtenerPeliculas", function($scope, obtenerPeliculas) {
        $scope.peliculas = obtenerPeliculas;
        //En caso de error se informa por consola
        $scope.peliculas.$loaded(function() {
            if ($scope.peliculas.length === 0) {
                console.error("No se han obtenido datos");
            }
        });
    }]);

    // Guarda un array de datos de todos los cines obtenidos
    cine.controller("verCines", ["$scope", "obtenerCines", function($scope, obtenerCines) {
        $scope.cines = obtenerCines;
        //En caso de error se informa por consola
        $scope.cines.$loaded(function() {
            if ($scope.cines.length === 0) {
                console.error("No se han obtenido datos");
            }
        });
    }]);

    // Guarda en un objeto el cine requerido
    cine.controller("verCine", ["$scope", "cine", function($scope, cine) {
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

    // Controlador que muestra la ventana emergente con la informacion de la pelicula
    cine.controller("CuadroInfo", function($scope, $mdDialog, $mdMedia) {
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
    cine.controller('DemoCtrl', function($scope) {
        $scope.user = {
            nombre: 'Developer',
            apellidos: 'Maximun Power ',
            address: 'De la amargura 37 15ºH',
            city: 'Leganes',
            provincia: 'Madrid',
            tarjeta: 'XXXXXXXXXXXXXXXX',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '28013',
            pago: 'PayPal',
            ano: '2018',
            mes: '1',
            csc: 'XXX',
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

        $scope.modopago = true;

        $scope.pagos = ('PayPal, Tarjeta').split(',').map(function(pago) {
            return {
                abbrev: pago
            };
        });
    });
})();