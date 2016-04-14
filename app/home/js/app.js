(function() {
  // Declare app level module which depends on views, and components
  var cine = angular.module("cine", ["ngMaterial", "firebase", "database", "user"]);

  /* Configurar tema */
  cine.config(function($mdThemingProvider) {
    $mdThemingProvider.theme("default") /* color palette */
      .primaryPalette("indigo")
      .accentPalette("yellow")
      .warnPalette("orange")
      .backgroundPalette('indigo', {
        'default': '50'
      });
    $mdThemingProvider.setDefaultTheme('default');
  });

})();
