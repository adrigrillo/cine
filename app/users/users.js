/* JavaScript de login.html y register.html */
(function() {
  // Declare app level module which depends on views, and components
  var user = angular.module("user", ["firebase"]);

  /*
  *   NO TOCAR!!!!!
  *   Controlador para iniciar sesión con el contenido del form de login.html
  *
  */
  user.controller('inicioSesion', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
    var firebaseObj = new Firebase("https://cinedsi.firebaseio.com");
    $scope.authObj = $firebaseAuth(firebaseObj);

    $scope.user = {};
    $scope.SignIn = function(user){
      var username = $scope.user.email;
      var password = $scope.user.password;
      $scope.authObj.$authWithPassword({
        email: username,
        password: password
      })
      .then(function(authData) {
        //Success callback
        console.log('Authentication successful: ', authData);
      }, function(error) {
        //Failure callback
        console.log('Authentication failure: ', error);
      });
    };
  }]);

    /*
  *   NO TOCAR!!!!!
  *   Controlador para registrar usuario con el contenido del form de register.html
  *
  */
  user.controller('registro', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
    var firebaseObj = new Firebase("https://cinedsi.firebaseio.com");
    $scope.authObj = $firebaseAuth(firebaseObj);

    $scope.user = {};
    $scope.register = function(user){
      var username = $scope.user.email;
      var password = $scope.user.password;

      $scope.authObj.$createUser({
        email: username,
        password: password
      })
      .then(function(userData) {
        console.log("User " + userData.uid + " created successfully!");

        return $scope.authObj.$authWithPassword({
          email: username,
          password: password
        })
        .then(function(authData) {
          //Success callback
          console.log('Authentication successful: ', authData);
        }, function(error) {
          //Failure callback
          console.log('Authentication failure: ', error);
        });
      });
    };
  }]);
})();
