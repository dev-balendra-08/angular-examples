var app = angular.module('ngSession', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/state1.html",
      controller: "state1Ctrl",
      resolve: {
        testResolve: function ($q, $timeout) {
          var deferred = $q.defer();
          $timeout(function () {
            deferred.resolve('Hello!');
          }, 0);
          return deferred.promise;
        }
      }
    })
    .state('about', {
      url: "/state2",
      templateUrl: "partials/state2.html",
      controller: function ($scope) {
        $scope.test = "test"
      }
    })
})

app.controller('state1Ctrl', function ($scope, testResolve, $interval) {
  $scope.test = testResolve
  $scope.show = true

  $scope.click = function () {
    $scope.countDown = 60;
    $interval(function () {
      $scope.countDown--
    }, 1000, 60);
  }
})
