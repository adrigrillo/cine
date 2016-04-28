(function() {

    // Declare app level module which depends on views, and components
    var cine = angular.module("cine", ["ctrl", "multiStepForm"]);

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
        $scope.steps = [
            {
                templateUrl: 'pago.html',
                title: '25'
            },
            {
                templateUrl: 'asientos.html',
                title: '50'
            },
        ];
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
