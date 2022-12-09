import TodoList from "../src/entity/TodoList";

test("Should create an empty todo list", function () {
  const todoList = new TodoList();
  expect(todoList.getTotal()).toBe(0);
  expect(todoList.getCompleted()).toBe(0);
});

test("Should create a todo list with one todo", function () {
  const todoList = new TodoList();
  todoList.addTodo("A");
  expect(todoList.getTotal()).toBe(1);
  expect(todoList.getCompleted()).toBe(0);
});

test("Should create a todo list with one todo", function () {
  const todoList = new TodoList();
  todoList.addTodo("A");
  expect(todoList.getTotal()).toBe(1);
  expect(todoList.getCompleted()).toBe(0);
});

test("Should create a todo list with two todos, one as done", function () {
  const todoList = new TodoList();
  todoList.addTodo("A");
  todoList.addTodo("B");
  todoList.todos[1].toggleDone();
  expect(todoList.getTotal()).toBe(2);
  expect(todoList.getCompleted()).toBe(50);
});

test("Should create a todo list preventing duplciated todos", function () {
  const todoList = new TodoList();
  todoList.addTodo("A");
  todoList.addTodo("A");
  expect(todoList.getTotal()).toBe(1);
  expect(todoList.getCompleted()).toBe(0);
});
