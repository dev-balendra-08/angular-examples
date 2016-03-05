describe('TodoApp', function () {
  beforeEach(module('todoApp'));

  var todoService

  beforeEach(inject(function (_todoService_) {
    todoService = _todoService_;
  }));

  describe('TodoService get.', function () {
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
})
