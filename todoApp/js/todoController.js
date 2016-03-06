app.controller('todoCtrl', ['$scope', 'todoService', function($scope, todoService) {
  $scope.tasks = todoService.get()

  // Remove the selected item.
  $scope.remove = function(index) {
    $scope.tasks = todoService.remove(index)
  }

  // Clear all the tasks.
  $scope.clear = function() {
    $scope.tasks = todoService.clear()
  }

  // Create new task.
  $scope.add = function() {
    var task = {
      name: $scope.name,
      done: false
    }
    $scope.tasks = todoService.add(task)
    $scope.name = ""
  }
  $scope.test = ""
}])
