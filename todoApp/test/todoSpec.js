describe('TodoApp', function () {
  beforeEach(module('todoApp'));

  var todoService
  var scope

  beforeEach(inject(function (_todoService_) {
    todoService = _todoService_;
  }));

  describe('TodoService.', function () {

    it('should return 3 tasks', function () {
      var tasks = todoService.get()
      expect(tasks.length).toBe(3)
      expect(tasks[0].name).toBe('Write some code')
    })

    it('should remove 1 task', function () {
      var tasks = todoService.remove(0)
      expect(tasks.length).toBe(2)
    })

    it('should add 1 task', function () {
      var task = {
        name: "Test task",
        done: false
      }
      var tasks = todoService.add(task)
      expect(tasks.length).toBe(4)
    })

    it('should clear all tasks', function () {
      var tasks = todoService.clear()
      expect(tasks.length).toBe(0)
    })

  })

  describe('Todo controller', function () {
    var ctrl

    // Inject scope and controller before each test.
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('todoCtrl', {$scope: scope});
    }))

    it('should remove 1 task', function () {
      scope.remove(0)
      expect(scope.tasks.length).toBe(2)
    })

    it('should add 1 task', function () {
      scope.name = "test task"
      scope.add()
      expect(scope.tasks.length).toBe(4)
      expect(scope.tasks[3].name).toBe("test task")
    })

    it('should clear all tasks', function () {
      scope.clear()
      expect(scope.tasks.length).toBe(0)
    })

  })
})
