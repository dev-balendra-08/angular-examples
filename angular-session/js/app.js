var app = angular.module('ngSession', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/state1.html",
      controller: "state1Ctrl"
    })
    .state('about', {
      url: "/state2",
      templateUrl: "partials/state2.html",
      controller: function($scope, test) {
        $scope.test = test
      },
      resolve: {
        test: function() {
          return "Hello world"
        }
      }
    })
})

app.controller('state1Ctrl', function ($scope) {
  $scope.test = "state 1"
  $scope.show = true

  $scope.click = function(message) {
    alert(message)
  }

  $scope.list = [
    {name: "Eminem", age:30},
    {name: "2pac", age:30},
    {name: "Snoop dog", age: "stoned"}
  ]
})
