class TodoList {
  constructor() {
    this.todos = [];
  }

  isEmpty() {
    return this.todos.length === 0;
  }

  add(task) {
    this.todos.push(task);
  }

  remove(index) {
    if (this.isEmpty()) {
      throw "list is empty";
    }
    this.todos.splice(index, 1);
  }
}

module.exports = TodoList;
