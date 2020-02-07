const assert = require("chai").assert;
const TodoList = require("../todolist");
const EMPTY = 0;

describe("todolist", () => {
  it("is the todolist empty", function() {
    const todoList = new TodoList();
    console.log(todoList);
    assert.equal(todoList.isEmpty(), true);
  });

  it("should add a todo is not empty", function() {
    const todoList = new TodoList();
    todoList.add("todo");
    assert.equal(todoList.isEmpty(), false);
  });

  it("should add a todo and increase todolist size From 0 to 1", function() {
    const todoList = new TodoList();
    const beginingSize = todoList.todos.length;
    todoList.add("todo");
    assert.equal(todoList.todos.length, beginingSize + 1);
  });

  it("should remove the selected todo by index in an empty list", function() {
    const todoList = new TodoList();

    expect(() => {
      todoList.remove(0);
    }).to.throw("list is empty");
  });

  it("should remove a todo from the todolist", function() {
    const todoList = new TodoList();
    todoList.add("todo1");
    todoList.add("todo2");
    const beginingSize = todoList.todos.length;
    todoList.remove(0);
    assert.equal(todoList.todos.length, beginingSize - 1);
  });

  it("should remove the selected todo by index ", function() {
    const todoList = new TodoList();
    todoList.add("todo1");
    todoList.add("todo2");
    const beginingSize = todoList.todos.length;
    todoList.remove(0);
    assert.deepEqual(todoList.todos, ["todo2"]);
  });

  it("should a empty input dont add a todo ", function() {
    const todoList = new TodoList();
    todoList.add("");
    assert.equal(todoList.todos.length, 0);
  });
});
