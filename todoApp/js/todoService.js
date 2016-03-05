'use strict'

app.factory('todoService', function () {
  var todo = {}

  todo.todoItems = [
    {
      name: "Write some code",
      done: true
    },
    {
      name: "Write some unit tests",
      done: false
    },
    {
      name: "Write a blog post",
      done: false
    }
  ]

  // Get todo items.
  todo.get = function () {
    return todo.todoItems
  }

  // Push new item to list.
  todo.add = function (data) {
    todo.todoItems.push(data)
    return todo.todoItems
  }

  // Remove item.
  todo.remove = function (index) {
    todo.todoItems.splice(index, 1)
    return todo.todoItems
  }

  // Clear all.
  todo.clear = function () {
    todo.todoItems = []
    return todo.todoItems
  }

  return todo
})
