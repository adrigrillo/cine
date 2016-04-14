var app = angular.module("BlankApp", ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('custom') /* color palette */
      .primaryPalette('indigo')
      .accentPalette('yellow')
      .warnPalette('orange')
      .backgroundPalette('lime', {
        'default': '600'
      });
    $mdThemingProvider.setDefaultTheme('custom');
  });
